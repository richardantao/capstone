const router = require("express").Router();
const validation = require("../middleware/validation/auth");
const controller = require("../controllers/auth");

router.get("/users", controller.user);

router.post("/users", validation.register, controller.register);

router.post("/", validation.login, controller.login);

router.delete("/", controller.logout);

module.exports = router;