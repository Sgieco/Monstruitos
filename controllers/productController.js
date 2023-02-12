const productController = {

    newProduct: (req,res) =>{
        res.render('newProduct')
    },

    editProduct: (req,res) => {
        res.render('editProduct')
    },

    cart: (req, res) => {
        res.render('productCart')
    },
}


module.exports = productController;