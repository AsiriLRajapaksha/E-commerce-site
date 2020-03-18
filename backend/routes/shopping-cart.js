const express = require('express');
const router = express.Router();
const Price = require('../models/shoppingPrice.js/shoppingPrice');

router.post('/' , async (req , res) => {
    const price = new Price({
        price:{
            tomato : req.body.price.tomato,
            apple : req.body.price.apple
        }});

    const result = await price.save();
    res.status(200).send({result})
});

router.get('/', async (req, res) => {
    const prices = await Price.find();

    if(prices){
        console.log(prices);
        res.status(200).send(prices);    
    }else{
        res.status(404).send({
            message:"Not Found"
        });
    }
});


module.exports = router;