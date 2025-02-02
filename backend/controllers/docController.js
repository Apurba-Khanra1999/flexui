// controllers/docController.js
const { Doc, Code } = require("../models");

/**
 * GET /api/docs
 * Retrieves all main docs (where parentId is null) with their codes and UI variants.
 */
const getDocs = async (req, res, next) => {
  try {
    const docs = await Doc.findAll({
      where: { parentId: null },
      include: [
        { model: Code, as: "codes" },
        {
          model: Doc,
          as: "uiVariants",
          include: [{ model: Code, as: "codes" }],
        },
      ],
      order: [["id", "ASC"]],
    });
    res.json(docs);
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/docs/:id
 * Retrieve a single doc by its ID including its codes and variants.
 */
const getDocById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const doc = await Doc.findByPk(id, {
      include: [
        { model: Code, as: "codes" },
        {
          model: Doc,
          as: "uiVariants",
          include: [{ model: Code, as: "codes" }],
        },
      ],
    });
    if (!doc) return res.status(404).json({ message: "Doc not found" });
    res.json(doc);
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/docs/slug/:uniqueSlug
 * Retrieve a single doc by its uniqueSlug.
 * Returns the full document (including its codes and variants).
 */
const getDocByUniqueSlug = async (req, res, next) => {
  try {
    const { uniqueSlug } = req.params;

    const doc = await Doc.findOne({
      where: { uniqueSlug },
      include: [
        { model: Code, as: "codes" },
        {
          model: Doc,
          as: "uiVariants",
          include: [{ model: Code, as: "codes" }],
        },
      ],
    });

    if (!doc) {
      return res.status(404).json({ message: "Doc not found" });
    }

    res.json(doc);
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/docs/unique-slugs
 * Retrieve a list of docs with only the uiName and uniqueSlug fields.
 * You can adjust the query to include only main docs if needed.
 */
const getUniqueSlugs = async (req, res, next) => {
  try {
    // If you want only main docs (not variants), you might filter with where: { parentId: null }
    const docs = await Doc.findAll({
      where: { parentId: null },
      attributes: ["id", "uiName", "uniqueSlug"],
    });

    res.json(docs);
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/docs
 * Create a new main doc.
 *
 * Expected payload:
 * {
 *   "uiName": "Button",
 *   "uiSubtitle": "Primary Button",
 *   "docs": "# Button Documentation...",
 *   "codes": [
 *     { "language": "jsx", "code": "function Button() { ... }" },
 *     { "language": "css", "code": ".button { ... }" }
 *   ],
 *   "parentId": null  // for main doc (optional)
 * }
 */
const createDoc = async (req, res, next) => {
  try {
    const { uiName, uiSubtitle, docs, codes, parentId } = req.body;

    // Create the main doc (or variant if parentId is not null)
    const newDoc = await Doc.create({
      uiName,
      uiSubtitle,
      docs,
      parentId: parentId || null,
    });

    // Create associated code snippets, if provided
    if (Array.isArray(codes)) {
      for (const codeEntry of codes) {
        await Code.create({
          language: codeEntry.language,
          code: codeEntry.code,
          docId: newDoc.id,
        });
      }
    }

    // Fetch the created doc along with its codes
    const createdDoc = await Doc.findByPk(newDoc.id, {
      include: [{ model: Code, as: "codes" }],
    });

    res.status(201).json(createdDoc);
  } catch (error) {
    next(error);
  }
};

/**
 * PUT /api/docs/:id
 * Update an existing doc.
 */
const updateDoc = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { uiName, uiSubtitle, docs } = req.body;
    const doc = await Doc.findByPk(id);
    if (!doc) return res.status(404).json({ message: "Doc not found" });

    await doc.update({ uiName, uiSubtitle, docs });
    res.json(doc);
  } catch (error) {
    next(error);
  }
};

/**
 * DELETE /api/docs/:id
 * Delete a doc and its associated codes/variants (via cascading).
 */
const deleteDoc = async (req, res, next) => {
  try {
    const { id } = req.params;
    const doc = await Doc.findByPk(id);
    if (!doc) return res.status(404).json({ message: "Doc not found" });
    await doc.destroy();
    res.json({ message: "Doc deleted successfully" });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/docs/:id/variants
 * Create a UI variant for the doc with the given ID.
 *
 * Expected payload:
 * {
 *   "uiName": "Button Variant",
 *   "uiSubtitle": "Secondary Button",
 *   "docs": "# Button Variant Documentation...",
 *   "codes": [
 *     { "language": "jsx", "code": "function VariantButton() { ... }" },
 *     { "language": "css", "code": ".variant-button { ... }" }
 *   ]
 * }
 */
const createVariant = async (req, res, next) => {
  try {
    const parentId = req.params.id;
    const { uiName, uiSubtitle, docs, codes } = req.body;

    // Ensure parent doc exists
    const parentDoc = await Doc.findByPk(parentId);
    if (!parentDoc)
      return res.status(404).json({ message: "Parent doc not found" });

    // Create the variant doc with parentId set
    const variant = await Doc.create({
      uiName,
      uiSubtitle,
      docs,
      parentId,
    });

    // Create associated codes for the variant
    if (Array.isArray(codes)) {
      for (const codeEntry of codes) {
        await Code.create({
          language: codeEntry.language,
          code: codeEntry.code,
          docId: variant.id,
        });
      }
    }

    // Fetch the newly created variant with its codes
    const createdVariant = await Doc.findByPk(variant.id, {
      include: [{ model: Code, as: "codes" }],
    });

    res.status(201).json(createdVariant);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDocs,
  getDocById,
  createDoc,
  updateDoc,
  deleteDoc,
  createVariant,
  getDocByUniqueSlug,
  getUniqueSlugs,
};
