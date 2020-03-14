const express = require('express');
const routes = express.Router();
const ShoppingList = require('../models/shoppingListSchema/shopping');

routes.post('/' , async (req , res) => {
    const shopping = new ShoppingList({
        ingredients : req.body.ingredients   
    });

    const result = await shopping.save();

    res.status(200).send({result:result});
});

module.exports = routes;