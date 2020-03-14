const mongoose = require('mongoose');

const shoppingListSchema = new mongoose.Schema({
    ingredients : {
        type: Array,
        name : {
                type: String,
                required: true
        },
        amount:{
                type: Number ,
                required: true
        }
        
    }
});

module.exports = mongoose.model("ShoppingList" , shoppingListSchema);