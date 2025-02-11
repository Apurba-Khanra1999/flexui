const { Category } = require("../models");

/**
 * GET /api/categories
 * Retrieve all categories.
 */
const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.findAll({
      attributes: ["id", "categoryName", "slug"],
      order: [["id", "ASC"]],
    });
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/categories/:id
 * Retrieve a single category by its ID.
 */
const getCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id, {
      attributes: ["id", "categoryName", "slug"],
    });
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(category);
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/categories
 * Create a new category.
 *
 * Expected payload:
 * {
 *   "categoryName": "Buttons",
 *   "slug": "buttons"
 * }
 */
const createCategory = async (req, res, next) => {
  try {
    const { categoryName, slug } = req.body;
    const category = await Category.create({ categoryName, slug });
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

/**
 * PUT /api/categories/:id
 * Update an existing category.
 *
 * Expected payload:
 * {
 *   "categoryName": "New Category Name",
 *   "slug": "new-category-slug"
 * }
 */
const updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { categoryName, slug } = req.body;
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    await category.update({ categoryName, slug });
    res.json(category);
  } catch (error) {
    next(error);
  }
};

/**
 * DELETE /api/categories/:id
 * Delete a category.
 */
const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    await category.destroy();
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
