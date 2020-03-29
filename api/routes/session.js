const router = require("express").Router();
const auth = require("../middleware/auth");
const validation = require("../middleware/validation/session");
const controller = require("../controllers/session");

router.post("/sessions", auth, validation, controller.create);

router.get("/sessions", auth, controller.fetch);

router.get("/sessions/:_id", auth, controller.edit);

router.get("/sessions/:_id", auth, validation, controller.update);

router.get("/sessions/:_id", auth, controller.delete);

module.exports = router;