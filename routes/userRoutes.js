const express = require ('express');
const router = express.Router();

const userController = require('../controllers/userController');

//MIDDLEWARE
const authUser = require('../middlewares/authUser');
const guestAuth = require('../middlewares/guestAuth');

//FORM REGISTRO
router.get('/register',guestAuth, userController.register);
router.post('/register/', userController.registerProcess);

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