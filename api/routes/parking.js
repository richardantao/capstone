const router = require("express").Router();
const auth = require("../middleware/auth");
const controller = require("../controllers/parking");

router.get("/parking", auth, controller.fetch);

router.get("/parking/:_id", auth, controller.inspect);

module.exports = router;