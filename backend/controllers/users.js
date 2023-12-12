const User = require('../models/user')
const passport = require('passport')

module.exports.signIn = (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    
    req.login(user, err => {
        if(err){
            console.log(err);
            res.json({error: true, msg: "cannot login"});
        }

        passport.authenticate('local')(req, res, ()=>{
            res.json({msg: 'logged in ' + user.email});
        })
    })

};

module.exports.signUp = (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email
    });
    
    User.register(user, req.body.password, (err, user) => {
        if(err){
            console.log(err);
            res.json({msg: "cannot register"});
        }

        passport.authenticate("local")(req, res, ()=>{
            res.json("registered");
        });
    })

};