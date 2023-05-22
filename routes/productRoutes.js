const express = require('express');
const router = express.Router();

const path = require('path');
const multer = require('multer');

const productController = require('../controllers/productController');

//MIDDLEWARE
const authAdmin = require('../middlewares/authAdmin');

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
router.get('/newProduct',authAdmin, productController.newProduct);
router.post('/newProduct/', uploadFile.single('foto'), productController.create);

//EDICION PRODUCTO
router.get('/editProduct/:id',authAdmin, productController.editProduct);
router.put('/editProduct/:id/',authAdmin, productController.changeProduct);


//ELIMINAR PRODUCTO
router.delete('/productDetail/:id/',authAdmin, productController.delete);

//CARRITO
router.get ('/cart', productController.cart);

//DETALLE DE PRODUCTO
router.get('/productDetail/:id', productController.productDetail);

//VER TODOS LOS PRODUCTOS
router.get('/all', productController.allProducts);

module.exports = router;
