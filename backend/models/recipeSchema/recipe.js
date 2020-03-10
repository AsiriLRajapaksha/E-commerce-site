const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: String,
    description:String,
    imagePath:String,
    ingredient:{
        type: Array,
        name:String,
        amount:Number
    }
});

module.exports = mongoose.model('Recipe', recipeSchema);