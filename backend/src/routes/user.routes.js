const express = require("express")
const authMiddleware = require("../middlewares/authMiddleware")
const userController = require("../controllers/user.controller")

const router = express.Router()

router.get("/profile", authMiddleware, userController.userProfile)

module.exports = router
