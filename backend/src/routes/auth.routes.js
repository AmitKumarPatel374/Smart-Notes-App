const express = require("express");
const authController = require("../controllers/auth.controller"); // ✅ FIXED

const router = express.Router();

router.post("/register", authController.register);

module.exports = router;