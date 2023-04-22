const { response } = require('express');
const fetch = require ('node-fetch');

const userController = {

    register: (req,res) => {
        fetch('https://apis.datos.gob.ar/georef/api/provincias')
        .then(response => response.json())
        .then(data => {
            res.render('register', {listado: data.provincias})
        })

       /* let pciaElegida = req.body.provincia;

        fetch('https://apis.datos.gob.ar/georef/api/localidades?provincia='+pciaElegida+'&max=1000&campos=nombre')
        .then(response => response.json())
        .then(data => {
            res.render('register', {ciudades: data.localidades})
        }) */
    },

    userProfile: (req, res) => {
        res.render('profile')
    },

    editProfile: (req,res) => {
        fetch('https://apis.datos.gob.ar/georef/api/provincias')
        .then(response => response.json())
        .then(data => {
            res.render('editProfile', {listado: data.provincias})
        })
    }
}

module.exports = userController;
