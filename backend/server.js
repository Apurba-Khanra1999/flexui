// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models"); // Import the sequelize instance

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON bodies

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/docs", require("./routes/docRoutes"));
app.use('/api/categories', require('./routes/categoryRoutes'));

// Global error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start the server and connect to the database
const startServer = async () => {
  try {
    await sequelize.authenticate(); // Test connection
    console.log("Database connection established.");
    // Sync models with database (use { force: true } only in development to drop tables)
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
