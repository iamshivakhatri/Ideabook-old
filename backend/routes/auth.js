const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');


//create a User using: POST "api/auth/" it doesn't require auth
router.post('/',[
    body('name','Enter a valid name').isLength({min:3}),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password').isLength({min:5})
], (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
    }).then(user => res.json(user))
    .catch(err=> {console.log(err)
    res.json({error: 'please enter a unique value for email', message: err.message})});



    //res.send(req.body); same thing like then(user => res.json(user)) 
}
)

module.exports = router