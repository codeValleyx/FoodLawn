const router = require("express").Router();

router.use('/user', require("./users"));
router.get('/', (req, res) => res.json({msg: "at home"}))

// router.use('/shop', require("./shops"));

module.exports = router;