const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipeSchema/recipe');

router.get('/', async (req,res)=> {
    const recipes = await Recipe.find();
    console.log(recipes);
    res.status(200).send(recipes);
});

router.post('/', async (req , res) => {
    const recipe = new Recipe({
        name: req.body.name,
        description : req.body.description,
        imagePath: req.body.imagePath
    });
    const result = recipe.save();
    res.status(200).send(result);
});

module.exports = router;