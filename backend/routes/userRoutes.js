// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  loginUser,
  getUserById,
} = require("../controllers/userController");

// GET /api/users
router.get("/", getUsers);

// POST /api/users
router.post("/signup", createUser);
router.post("/login", loginUser);
router.get("/:id", getUserById);

module.exports = router;
