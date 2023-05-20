//PARA USO DEL FRAMEWORK
const express = require('express');
const app = express();

//PARA USO DE SESSION Y COOKIES
const session = require('express-session'); 
const cookies = require("cookie-parser");

const path = require ('path');

const dotenv = require('dotenv').config();
const methodOverride = require("method-override");

//IMPORTAMOS MIDDLEWARE
const userLogged = require('./middlewares/userLogged');
const admLogged = require('./middlewares/admLogged');


//RUTAS
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const adminRoutes = require('./routes/adminRoutes');

//PARA USO DEL REQ.BODY
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//PARA EL USO DE METODOS PUT Y DELETE
app.use(methodOverride ("_method")); 

//IMPLEMENTAMOS SESSION COMO MIDDLEWARE A NIVEL APP
app.use(session({
    secret: "Secret Message",
    resave: false,
    saveUninitialized: false
}));

//MIDDLEWARES A NIVEL APP
app.use(cookies());
app.use(userLogged);
app.use(admLogged);


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
app.use('/admin', adminRoutes);


//SERVIDOR
app.listen(process.env.PORT || 3001 , () => {
    console.log('Servidor funciona ok')
})


