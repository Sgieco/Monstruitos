const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

//FORM NUEVO PRODUCTO
router.get('/newProduct', productController.newProduct);

//FORM EDICION PRODUCTOS
router.get('/editProduct', productController.editProduct);

//CARRITO
router.get ('/cart', productController.cart);

//DETALLE DE PRODUCTO
router.get('/productDetail', productController.productDetail);



module.exports = router;
