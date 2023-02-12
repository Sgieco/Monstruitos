const mainController = {

    home: (req,res) =>  {
        res.render('home')
    },

    error: (req,res) => {
        res.render('error')
    }
    
}

module.exports = mainController;
