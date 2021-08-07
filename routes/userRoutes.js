const router = require("express").Router();
const userControl = require("../controller/userControl");
const validateRegistration = require('../middleware/validateRegistration');
const validateLogin = require('../middleware/validateLogin');

router.post("/register",validateRegistration, userControl.register);

router.post("/info",userControl.info);

router.post("/login", validateLogin ,userControl.login);

module.exports = router;