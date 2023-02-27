const mainController = {

    home: (req,res) =>  {
        res.render('home')
    },

    error: (req,res) => {
        res.render('error')
    },

    products: (req,res) =>{
        res.render('products')
    },

    sale: (req,res)=>{
        res.render('saleProduct')
    }
    
}

module.exports = mainController;
