require('./models/db');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const recipeRoutes = require('./routes/index');
const shoppingRoutes = require('./routes/shopping');
const dbConnect = require('./models/db');

app.use(express.json({extended: true}));


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT , DELETE, OPTIONS"
    );
    next();
  });
  
  app.use('/api/recipe',recipeRoutes); 
  app.use('/api/shopping',shoppingRoutes); 
  
  
  module.exports = app;



























// app.use(express.static(path.join(_dirname,'/public')));
// app.set('views', path.join(_dirname,'views'));
// app.engine('hbs',exphbs({
//     extname:'hbs',
//     defaultLayout:'mainLayout',
//     layoutsDir: __dirname+ '/views/'
// }));
// app.set('view engine','hbs');
// app.listen(3000,()=>{
//     console.log('Server on port: 3000');
// });
// app.use('/',oderController);