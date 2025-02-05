// controllers/userController.js
const { User } = require("../models");

// GET /api/users
const getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

// POST /api/users
const createUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ where: { email } });
    console.log(existingUser);
    if (!existingUser || existingUser === null) {
      const newUser = await User.create({ username, email, password });
      res
        .status(201)
        .json({ message: "Resigtration successful", user: newUser });
    }

    if (email === existingUser.email) {
      return res.status(400).json({ message: "User already exists" });
    }
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    const existingUser = await User.findOne({ where: { email } });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    if (password !== existingUser.password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    if (password === existingUser.password) {
      return res.json({ message: "Login successful", user: existingUser });
    }
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  createUser,
  loginUser,
  getUserById,
};
