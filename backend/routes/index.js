const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipeSchema/recipe');

router.get('/', async (req,res)=> {
    const recipes = await Recipe.find();
    console.log(recipes);
    res.status(200).send({recipes:recipes});
});

router.get('/:id', async (req , res) => {
    console.log(req.params.id);
    const recipe = await Recipe.findById(req.params.id);
    res.status(200).send({recipe:recipe});
});

router.post('/', async (req , res) => {
    const recipe = new Recipe({
        name: req.body.name,
        description : req.body.description,
        imagePath: req.body.imagePath,
        ingredient: {
            name:req.body.ingredient.name,
            amount:req.body.ingredient.amount
        }
    });
    const result = recipe.save();
    res.status(200).send(result);
});

module.exports = router;