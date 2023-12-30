const router = require("express").Router();
const shopApi = require("../controllers/shops");

router.get("/", shopApi.getAll);
router.get("/:id", shopApi.info);
router.post("/:id", shopApi.order);

// router.post("/sign-in", shopApi.signIn);
// router.post("/sign-up", shopApi.signUp);

module.exports = router;