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
  },
  {
    timestamps: true,
  }
);

// Before validating a Doc instance, automatically generate a uniqueSlug if not provided.
Doc.beforeValidate((doc, options) => {
  if (!doc.uniqueSlug && doc.uiName) {
    doc.uniqueSlug = generateSlug(doc.uiName);
  }
});

module.exports = Doc;
