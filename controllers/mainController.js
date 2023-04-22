let db = require("../database/models");

const mainController = {

    home: (req,res) =>  {
        let pedidoDestacados = db.Product.findAll({
            raw: true,
            where: {
                seccion_id: 1
            }
        })

        let pedidoOfertas = db.Product.findAll({
            raw: true,
            where: {
                seccion_id: 2
            }
        })

        Promise.all([pedidoDestacados, pedidoOfertas])
            .then(function ([destacados, ofertas]) {
                res.render('home', { destacados: destacados, ofertas: ofertas })
            })
    },

    error: (req,res) => {
        res.render('error')
    },

    products: (req,res) =>{
        res.render('products')
    },

    sale: (req,res)=>{
        db.Product.findAll({
            raw: true,
            where:{
                seccion_id: 2
            }
        }).then(function(ofertas){
            res.render('saleProduct', {ofertas: ofertas})
        })  
    }

   /* search: (req,res) => {
        const productoBuscado = req.body.searching

        const resultado = db.findAll({
            raw: true,
            where: {
                nombre: productoBuscado
            }
        })

        console.log(resultado);
        Promise.all(resultado)
            .then(function (resultado) {
            res.render('home', { destacados: resultado, ofertas: resultado })
        })
    }*/
    
}

module.exports = mainController;
