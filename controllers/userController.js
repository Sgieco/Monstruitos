const { response } = require('express');
const fetch = require ('node-fetch'); //PARA CONSUMIR APIS EXTERNAS

const db = require('../database/models');//PARA ACCEDER A NUESTRAS TABLAS DB
const bcryptjs = require('bcryptjs');//PARA ENCRIPTAR PASS

const { validationResult } = require('express-validator');


const userController = {

    register: (req,res) => {

        res.render('register')
       
    },

    registerProcess: (req,res) => {

        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body,

            })

        };

        let userInDB = db.Usuario.findOne({
            where: {
                email: req.body.email
            }
        })

        if (userInDB) {
            return res.render('register', {
                errors: { email: { msg: 'Este mail ya esta registrado, podés iniciar sesión directamente'} },
                oldData: req.body

            })
        }

        db.Usuario.create({
            nombreyapellido: req.body.nombre,
            apodo: req.body.apodo,
            email: req.body.email,
            telefono: req.body.telefono,
            provincia: req.body.provincia,
            localidad: req.body.localidad,
            calle: req.body.calle,
            numero: req.body.numero,
            departamento: req.body.departamento,
            contraseña: bcryptjs.hashSync(req.body.contraseña, 10),
            imagen: req.file.filename
        })

        res.redirect('/')
    },

    login: async (req,res) => {
        let userToLogin = await db.Usuario.findOne({
            where: {
                email: req.body.email
            }
        })

        if(userToLogin){
            let isOkPassword = bcryptjs.compare(req.body.password, userToLogin.contraseña)

            if(isOkPassword){
                delete userToLogin.contraseña;
                req.session.userLogged = userToLogin;

                if(req.body.remember-user){
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 30 })
                }

                return res.redirect('/user/profile/' + userToLogin.id);
            }

            return res.render('login', {
                errors: {
                    password: {
                        msg: 'Ups! Parece que la constraseña ingresada es incorrecta'
                    }
                }
            })
        }
    },

    userProfile: (req, res) => {
        return res.render('userProfile', {
            user: req.session.userLogged
        })
    },

    editProfile: (req,res) => {
        let user = req.session.userLogged;
        res.render('userProfileEdit', { user: user })
    },

    changeProfile: async(req, res) =>{
        let idUser = req.params.id;
        let user = req.session.userLogged;
        let imagenPerfil = user.imagen

        const usuario = {
            nombreyapellido: req.body.nombre,
            apodo: req.body.apodo,
            email: req.body.email,
            telefono: req.body.telefono,
            provincia: req.body.provincia,
            localidad: req.body.localidad,
            calle: req.body.calle,
            numero: req.body.numero,
            departamento: req.body.departamento,
            id: idUser,
            imagen: imagenPerfil
        };

        let usuarioEditado = await db.Usuario.update(usuario, {
            where: {
                id: idUser
            }
        })

        if (await usuarioEditado) {
            req.session.userLogged = usuario
        }
        res.redirect('/')
    },

    deleteProfile: (req, res) => {
        let deleteUser = db.Usuario.destroy({
            where: {
                id: req.params.id
            }
        })

        if (deleteUser) {
            req.session.destroy();
        }
        res.redirect('/')
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = userController;
