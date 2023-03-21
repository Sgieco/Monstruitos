const express = require('express');
const app = express();
const path = require ('path');

const dotenv = require('dotenv').config();
const methodOverride = require("method-override");



//RUTAS
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

//VISTAS --> aclaramos en que carpetas buscar las vistas
app.set('view engine','ejs'); 
app.set('views', [
    path.join(__dirname, './views/main'),
    path.join(__dirname, './views/user'),
    path.join(__dirname, './views/product'), 
]);

//RECURSOS ESTATICOS
app.use(express.static('public')); 

//USO DE RUTAS
app.use('/', mainRoutes);
app.use('/user', userRoutes);
app.use('/products', productRoutes);

//PARA USO DEL REQ.BODY
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//PARA EL USO DE METODOS PUT Y DELETE
app.use(methodOverride ("_method")); 


//SERVIDOR
app.listen(process.env.PORT || 3001 , () => {
    console.log('Servidor funciona ok')
})


