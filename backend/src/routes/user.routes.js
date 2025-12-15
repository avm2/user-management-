const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");
const { getUsers, getProfile } = require("../controllers/user.controller");

router.get("/", auth, role("ADMIN"), getUsers);
router.get("/me", auth, getProfile);

module.exports = router;
