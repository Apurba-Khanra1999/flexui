// models/index.js
const sequelize = require("../config/database");
const Category = require("./Categories");
const Code = require("./Codes");
const Doc = require("./Doc");
const User = require("./User");

// Association: A Doc can have many Code entries.
Doc.hasMany(Code, { foreignKey: "docId", as: "codes", onDelete: "CASCADE" });
Code.belongsTo(Doc, { foreignKey: "docId", as: "doc" });

// Association for variants:
// A main Doc (with parentId null) can have many variants (Docs with parentId set to main doc id).
Doc.hasMany(Doc, {
  foreignKey: "parentId",
  as: "uiVariants",
  onDelete: "CASCADE",
});
// Each variant belongs to a parent doc.
Doc.belongsTo(Doc, { foreignKey: "parentId", as: "parentDoc" });

// Association between Doc and Category
Doc.belongsTo(Category, { foreignKey: "categoryId", as: "category" });
Category.hasMany(Doc, { foreignKey: "categoryId", as: "docs" });

module.exports = {
  sequelize,
  User,
  Doc,
  Code,
  Category,
};
