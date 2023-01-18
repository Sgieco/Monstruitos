const express = require('express');
const app = express();
const path = require ('path');

const dotenv = require('dotenv').config();


//RUTAS
const mainRoutes = require('../Monstruitos/routes/mainRoutes');

//VISTAS
app.set('view engine','ejs'); 
app.set('views', [
    path.join(__dirname, './views/main')
  
]);

//RECURSOS ESTATICOS
app.use(express.static('public')); 

//USO DE RUTAS
app.use('/', mainRoutes);


//SERVIDOR
app.listen(process.env.PORT || 3001 , () => {
    console.log('Servidor funciona ok')
})


