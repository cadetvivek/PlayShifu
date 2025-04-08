const express = require('express');
const router = express.Router();
const { getProducts, getProductById } = require('../controllers/productController');

router.get('/', getProducts); // List all products
router.get('/:id', getProductById); // Get product by ID

module.exports = router;