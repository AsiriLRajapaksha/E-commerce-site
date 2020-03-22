const express = require('express');
const router = express.Router();
const ShoppingList = require('../../models/shopping-list/shopping');

router.post('/' , async (req , res) => {
    // console.log(req.body);
    const shopping = new ShoppingList({
        ingredients:req.body
    });

    const result = await shopping.save();
    console.log(result);

    res.status(200).send({result:result});
});

router.get('/' , async (req , res) => {

    const ingredients = await ShoppingList.find();
    res.status(200).send({ingredients:ingredients});

});

module.exports = router;