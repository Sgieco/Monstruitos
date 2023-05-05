const express = require('express');
const router = express.Router();

const path = require('path');
const multer = require('multer');

const productController = require('../controllers/productController');

//ALMACEN DE FOTOS
const storage  = multer.diskStorage({ 
    destination: (req, file, cb) =>{
        cb(null, './public/images/products')
    }, 
    filename: (req, file, cb) =>{ 
        let filename = `${Date.now()}_img${path.extname(file.originalname)}`
        cb(null,filename)
    }
});

const uploadFile = multer({storage}); //nombre bajo el cual llamamos al middleware

//NUEVO PRODUCTO
router.get('/newProduct', productController.newProduct);
router.post('/newProduct/', uploadFile.single('foto'), productController.create);

//EDICION PRODUCTO
router.get('/editProduct/:id', productController.editProduct);
router.put('/editProduct/:id/', productController.changeProduct);


//ELIMINAR PRODUCTO
router.delete('/productDetail/:id/', productController.delete);

//CARRITO
router.get ('/cart', productController.cart);

//DETALLE DE PRODUCTO
router.get('/productDetail/:id', productController.productDetail);

//VER TODOS LOS PRODUCTOS
router.get('/all', productController.allProducts);

module.exports = router;
