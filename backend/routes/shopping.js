const express = require('express');
const routes = express.Router();
const Shopping = require('../models/shoppingListSchema/shopping');

routes.post('/' , async (req , res) => {
    const shopping = new Shopping({
            name: req.body.shoppingList.name,
            amount: req.body.shoppingList.amount    
    });

    const result = await shopping.save();

    res.status(200).send(200);
});

module.exports = routes;