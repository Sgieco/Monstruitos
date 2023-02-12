const { response } = require('express');
const fetch = require ('node-fetch');

const userController = {

    register: (req,res) => {
        fetch('https://apis.datos.gob.ar/georef/api/provincias')
        .then(response => response.json())
        .then(data => {
            res.render('register', {listado: data.provincias})
        })
    },

    userProfile: (req, res) => {
        res.render('profile')
    }
}

module.exports = userController;
