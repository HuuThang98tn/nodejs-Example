const express = require('express');
const router = express.Router();


const mAuthController = require("../controllers/AuthController")


router.post("/login", mAuthController.mAuthLogin);
router.post("/register", mAuthController.mAuthRegister);


module.exports = router;