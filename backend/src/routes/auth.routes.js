const express = require("express");
const { default: authController } = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register",authController.register);