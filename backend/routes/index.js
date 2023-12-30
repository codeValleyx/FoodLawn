const router = require("express").Router();

router.use('/user', require("./users"));

router.use('/shop', require("./shops"));

module.exports = router;