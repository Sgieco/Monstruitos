const productController = {

    newProduct: (req,res) =>{
        res.render('newProduct')
    },

    editProduct: (req,res) => {
        res.render('editProduct')
    },

    productDetail: (req,res) =>{
        res.render('productDetail')
    },

    cart: (req, res) => {
        res.render('productCart')
    }

    
}


module.exports = productController;