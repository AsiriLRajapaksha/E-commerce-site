const mongoose = require('mongoose');

const shoppingListSchema = new mongoose.Schema({
    cart : {
        type: Array
    }
});

module.exports = mongoose.model("ShoppingList" , shoppingListSchema);