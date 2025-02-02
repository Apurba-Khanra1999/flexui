// models/code.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Code = sequelize.define('Code', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  language: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  code: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  docId: {
    // Foreign key referencing a Doc
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Code;
