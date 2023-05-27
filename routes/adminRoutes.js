const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');

//INICIO SESION
router.post('/login/',adminController.loginAdmin);

//CIERRE SESION
router.get('/logout/', adminController.logout);


module.exports = router;

