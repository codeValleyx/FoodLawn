const User = require('../models/user')
const passport = require('passport')

module.exports.signIn = (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password
    });
    
    req.login(user, err => {
        if(err){
            console.log(err);
            return res.status(401).json({success: false, msg: "cannot login", error: err});
        }

        passport.authenticate('local')(req, res, async ()=>{
            const curUser = await User.findOne({email: user.email});
            res.status(200).json({success: true, msg: 'authenticated', user: curUser});
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
            return res.status(409).json({success: false, msg: "email already exists", error: err});
        }

        passport.authenticate("local")(req, res, async ()=>{
            res.json({success: true, msg: 'authenticated', user: user});
        });
    })

};

module.exports.logout = (req, res) => {
    if(req.isAuthenticated()){
        req.logout(err => {
            if(err){
                res.status(400).json({success: false, msg: "Cannot logout"});
            }
            else res.status(200).json({success: true, msg: "Logged out successfully"});
        });
    }
    else{
        res.status(400).json({succes: false, msg: "User not authenticated"});
    }
}