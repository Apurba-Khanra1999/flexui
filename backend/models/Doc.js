// models/doc.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

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
  },
  {
    timestamps: true,
  }
);

module.exports = Doc;
