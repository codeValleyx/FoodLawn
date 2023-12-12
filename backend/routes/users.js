const express = require("express");
const User = require('../models/user')
const passport = require('../config/passport_config')

const router = express.Router();

const userApi = require("../controllers/users");

router.post("/sign-in", userApi.signIn);
router.post("/sign-up", userApi.signUp);
// router.post("/sign-in", passport.authenticate('local'),
// (req, res) => {
//     const user = new User({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password
//     });
    
//     req.login(user, err => {
//         if(err){
//             console.log(err);
//             // res.redirect('/user/sign-in');
//             res.json({error: true, msg: "cannot login"});
//         }

//         passport.authenticate('local')(req, res, ()=>{
//             console.log("done");
//             res.json({msg: 'logged in' + user.email});
//         })
//     })
// });
// router.post("/sign-up", userApi.signUp);

module.exports = router;