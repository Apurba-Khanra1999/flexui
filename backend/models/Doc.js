// models/doc.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const { generateSlug } = require("../utils/generateUniqueSlug");

const Doc = sequelize.define(
  "Doc",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    uiName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uiSubtitle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    docs: {
      // Stores the MDX content
      type: DataTypes.TEXT,
      allowNull: false,
    },
    parentId: {
      // If null then this is a main doc; otherwise it is a variant of the doc with that id.
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    uniqueSlug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      // Optionally, you can add a comment here:
      // Example: "button" for a Button component
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

// Before validating a Doc instance, automatically generate a uniqueSlug if not provided.
Doc.beforeValidate(async (doc, options) => {
  if (!doc.uniqueSlug && doc.uiName) {
    doc.uniqueSlug = generateSlug(doc.uiName);
  }
  const existing = await Doc.findOne({
    where: { uniqueSlug: doc.uniqueSlug },
  });
  if (existing && existing.id !== doc.id) {
    const error = new Error("UniqueSlug already exists");
    error.status = 404; // As requested, we use 404 even though 409 may be more appropriate.
    throw error;
  }
});

module.exports = Doc;
