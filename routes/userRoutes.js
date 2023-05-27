const express = require ('express');
const router = express.Router();

const userController = require('../controllers/userController');

const path = require('path');
const multer = require('multer');
const bcryptjs = require('bcryptjs');
const {body} = require("express-validator");


//STORAGE IMAGEN USUARIO
const storage  = multer.diskStorage({ 
    destination: (req, file, cb) =>{
        cb(null, './public/images/users')
    }, 
    filename: (req, file, cb) =>{ 
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`
        cb(null,fileName)
    }
});

const uploadFile = multer({storage});


//MIDDLEWARE
const authUser = require('../middlewares/authUser');
const guestAuth = require('../middlewares/guestAuth');
const registerForm = require('../middlewares/validations/registerForm');

//FORM REGISTRO
router.get('/register',guestAuth, userController.register);
router.post('/register/',uploadFile.single('avatar'), registerForm, userController.registerProcess);

//INICIO SESION
router.post('/login/', userController.login);

//USER PROFILE
router.get('/profile/:id',authUser, userController.userProfile);

//EDIT PROFILE
router.get('/editProfile/:id',authUser, userController.editProfile);
router.put('/editProfile/:id/',authUser, userController.changeProfile);

//ELIMINAR USUARIO
router.delete('/editProfile/delete/:id',authUser, userController.deleteProfile);

//CERRAR SESION
router.get('/logout/', userController.logout)





module.exports = router