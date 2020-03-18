const mongoose = require('mongoose');

const priceShema = new mongoose.Schema({
    price:{
        type: Array,
        tomato:Number,
        apple:Number
    }
});

module.exports = mongoose.model("Price",priceShema);