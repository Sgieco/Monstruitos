const express = require ('express');
const router = express.Router();

const userController = require('../controllers/userController');

//FORM REGISTRO
router.get('/register', userController.register);

//USER PROFILE
router.get('/profile', userController.userProfile);

//EDIT PROFILE
router.get('/editProfile', userController.editProfile);


module.exports = router