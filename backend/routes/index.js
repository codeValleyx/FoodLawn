const router = require("express").Router();

router.use('/user', require("./users"));

router.use('/shop', require("./shops"));

router.use('/cart', require("./cart"));

module.exports = router;