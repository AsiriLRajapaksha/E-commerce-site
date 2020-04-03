const mongoose = require('mongoose');

const shoppingListSchema = new mongoose.Schema({
    ingredients : {
        type: Array
    }
});

module.exports = mongoose.model("ShoppingList" , shoppingListSchema);