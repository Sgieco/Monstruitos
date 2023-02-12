const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/newProduct', productController.newProduct);
router.get('/editProduct', productController.editProduct);
router.get ('/cart', productController.cart);


module.exports = router;
