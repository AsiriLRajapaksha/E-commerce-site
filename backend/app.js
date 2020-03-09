require('./models/db');
const express = require('express');
const mongoose = require('mongoose');
// const exphbs = require('express-handlebars');
// const path = require('path');
// const bodyparser = require('body-parser');
// const oderController = require('./controllers/oderController');
const app = express();

const postRoutes = require('./routes/index');
const dbConnect = require('./models/db');

app.use(express.json({extended: true}));

// mongoose.connect("mongodb://localhost/ecommerce",{useNewUrlParser: true})
//     .then(()=> {
//         console.log('Connect to the mongodb...');
//     })
//     .catch(error => {
//         console.error("Not connect to mongodb....");
//     });


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
  
  app.use('/api/index',postRoutes); 
  
  
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