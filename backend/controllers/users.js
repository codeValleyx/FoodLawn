const User = require('../models/user')
// const passport = require('../server')

module.exports.signIn = (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    req.login(user, err => {
        if(err){
            console.log(err);
            res.redirect('/sign-in');
        }

        passport.authenticate('local')(req, res, ()=>{
            console.log("done");
            res.redirect('/');
        })
    })
};