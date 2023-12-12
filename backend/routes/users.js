const express = require("express");

const router = express.Router();

const userApi = require("../controllers/users");

router.post("/sign-in", userApi.signIn);
// router.post("/sign-up", userApi.signUp);

module.exports = router;