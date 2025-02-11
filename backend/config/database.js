const { Sequelize } = require("sequelize");
const config = require("./config.js");

let sequelize; // Store connection globally to prevent multiple instances

if (process.env.NODE_ENV === "production") {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      ssl: { require: true, rejectUnauthorized: false }, // ✅ Needed for most cloud-hosted DBs
    },
  });
} else {
  sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
      host: config.development.host,
      dialect: config.development.dialect,
      logging: false,
    }
  );
}

module.exports = sequelize;
