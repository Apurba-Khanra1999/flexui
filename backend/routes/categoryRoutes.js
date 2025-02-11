const express = require('express');
const router = express.Router();
const {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryController');

// GET all categories
router.get('/', getCategories);

// GET a single category by ID
router.get('/:id', getCategoryById);

// POST a new category
router.post('/', createCategory);

// PUT (update) an existing category
router.put('/:id', updateCategory);

// DELETE a category
router.delete('/:id', deleteCategory);

module.exports = router;
