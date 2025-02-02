// routes/docRoutes.js
const express = require("express");
const router = express.Router();
const {
  getDocs,
  getDocById,
  createDoc,
  updateDoc,
  deleteDoc,
  createVariant,
} = require("../controllers/docController");

// Main docs routes
router.get("/", getDocs);
router.get("/:id", getDocById);
router.post("/", createDoc);
router.put("/:id", updateDoc);
router.delete("/:id", deleteDoc);

// Route for creating a variant for an existing doc
router.post("/:id/variants", createVariant);

module.exports = router;
