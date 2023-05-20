const express = require ('express');
const router = express.Router();

const userController = require('../controllers/userController');

//FORM REGISTRO
router.get('/register', userController.register);
router.post('/register/', userController.registerProcess);

//INICIO SESION
router.post('/login/', userController.login);

//USER PROFILE
router.get('/profile/:id', userController.userProfile);

//EDIT PROFILE
router.get('/editProfile/:id', userController.editProfile);
router.put('/editProfile/:id/', userController.changeProfile);

//ELIMINAR USUARIO
router.delete('/editProfile/delete/:id', userController.deleteProfile);

//CERRAR SESION
router.get('/logout/', userController.logout)





module.exports = router