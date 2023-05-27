const db = require('../database/models');

const sequelize = db.sequelize;
const { Op } = require('sequelize');

const {validationResult} = require('express-validator');


const productController = {

    newProduct: (req, res) => {
        res.render('newProduct')
    },

    create: (req, res) => {

        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0) {

            return res.render('newProduct', {
                errors: resultValidation.mapped(), 
                oldData: req.body
            })
        }

        db.Product.create({
            nombre: req.body.nombre,
            categoria_id: req.body.categoria,
            subcategoria_id: req.body.subcategoria,
            precio: req.body.precio,
            seccion_id: req.body.seccion,
            descuento: req.body.descuento,
            talle: req.body.talles,
            color: req.body.colores,
            descripcion: req.body.descripcion,
            ancho: req.body.ancho,
            largo: req.body.largo,
            alto: req.body.alto,
            imagen: req.file.filename
        })

        res.redirect('/products/all')

    },

    editProduct: (req, res) => {
        let pedidoProducto = db.Product.findByPk(req.params.id);

        let pedidoCategorias = db.Categoria.findAll();

        let pedidoSubcategorias = db.Subcategoria.findAll();

        let pedidoSeccion = db.Seccion.findAll();

        Promise.all([pedidoProducto, pedidoCategorias, pedidoSubcategorias, pedidoSeccion])
            .then(function ([producto, categorias, subcategorias, secciones]) {
                res.render('editProduct', {
                    producto: producto,
                    categorias: categorias,
                    subcategorias: subcategorias,
                    secciones: secciones
                })
            })
    },

    changeProduct: (req, res) => {
        let idProducto = req.params.id;
        let productoAEditar = db.Product.findByPk(idProducto);

        let imagenACargar;
        if (req.file == undefined) {
            imagenACargar = productoAEditar.imagen
        } else {
            imagenACargar = req.file.filename
        }

        db.Product.update({
            nombre: req.body.nombre,
            categoria_id: req.body.categoria,
            subcategoria_id: req.body.subcategoria,
            precio: req.body.precio,
            seccion_id: req.body.seccion,
            descuento: req.body.descuento,
            talle: req.body.talles,
            color: req.body.colores,
            descripcion: req.body.descripcion,
            ancho: req.body.ancho,
            largo: req.body.largo,
            alto: req.body.alto,
            imagen: imagenACargar
        }, {
            where: {
                id: idProducto
            }
        })

        res.redirect('/');

    },

    delete: (req,res) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect('/')

    },

    productDetail: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(function(producto){
            res.render('productDetail', {producto:producto})
        })  
    },

    cart: (req, res) => {
        res.render('productCart')
    },

    allProducts: (req,res) => {
        db.Product.findAll({

        }).then(function(productos){
                res.render('products', {productos:productos})
            })    
    }


}


module.exports = productController;