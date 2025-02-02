// config/database.js
const { Sequelize } = require("sequelize");
const config = require("./config.js").development;

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    logging: false, // Set to console.log to enable query logging
  }
);

module.exports = sequelize;
