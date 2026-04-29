const express = require("express")
const authController = require("../controllers/auth.controller") // ✅ FIXED

const router = express.Router()

router.post("/register", authController.register)
router.post("/user", authController.findUserByEmail)
router.post("/login", authController.loginUser)

module.exports = router
