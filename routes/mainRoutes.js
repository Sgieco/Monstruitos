const express = require ('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

//HOME
router.get('/', mainController.home);

//ERROR
router.get('/error', mainController.error);

//VISUAL DE TODOS LOS PRODUCTOS
router.get('/products', mainController.products);

//VISUAL DE OFETRAS
router.get('/sale', mainController.sale);

//BUSCADOR DE PRODUCTOS
//router.post('/search', mainController.search);



module.exports = router