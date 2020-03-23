const User = require('../../models/auth/user');
const express = require('express');
const bycrypt = require('bycrypt');
const router = express.Router();

router.post('/signup', (req , res) => {
    bycrypt.hash(req.body.password , 10)
      .then( hash => {
        const user = User({
            name:req.body.name,
            email:req.body.email,
            password:hash
        });

        user.save()
         .then( result => {
            res.status(201).send({
                message:'Data saved!',
                result:result
            });
         })
         .catch(error => {
            res.status(500).send({
                error:error
            })
         });
      })
});

module.exports = router;