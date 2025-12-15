const router = require("express").Router();
const upload = require("../middlewares/upload.middleware");
const c = require("../controllers/auth.controller");

router.post("/register", upload.single("image"), c.register);
router.get("/verify/:token", c.verifyEmail);
router.post("/login", c.login);
router.post("/forgot", c.forgotPassword);
router.post("/reset/:token", c.resetPassword);

module.exports = router;
