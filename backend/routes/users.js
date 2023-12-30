const express = require("express");

const router = express.Router();

const userApi = require("../controllers/users");

router.post("/sign-in", userApi.signIn);
router.post("/sign-up", userApi.signUp);
router.post("/logout", userApi.logout);

router.get("/isAuth", (req,res)=>{
    if(req.isAuthenticated()){
        res.status(200).json(req.user);
    }
    else{
        res.status(401).json(false);
    }
});

module.exports = router;