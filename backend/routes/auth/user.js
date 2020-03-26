const User = require('../../models/auth/user');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/signup', (req , res) => {
    bcrypt.hash(req.body.password , 10)
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
      });
});


router.post('/login' , (req , res) => {
    let fetchUser;
    User.findOne({email:req.body.email})
      .then( user => {
          console.log("1 stage............");
          if(!user){
              return res.status(401).send({
                  message:'Auth Failed'
              });
          }
          fetchUser = user;
          return bcrypt.compare(req.body.password , user.password);
      })
      .then( result => {
          console.log("2 stage............");
          if(!result){
            return res.status(401).send({
                message:'Auth Failed'
            });
          }
          const token = jwt.sign(
            {email:fetchUser.email , userId:fetchUser._id},
            'secret_this_should_be_longer',
            {expiresIn: "1h"}
          );
          res.status(200).send({
              token:token
          });
      })
      .catch(error => {
        console.log("3 stage............");
          res.status(401).send({
              message:'Auth fail'
          });
      });

});

module.exports = router;