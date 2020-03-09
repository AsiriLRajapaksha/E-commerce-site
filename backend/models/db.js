const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/ecommerce",{useNewUrlParser: true})
    .then(()=> {
        console.log('Connect to the mongodb...');
    })
    .catch(error => {
        console.error("Not connect to mongodb....");
    });
