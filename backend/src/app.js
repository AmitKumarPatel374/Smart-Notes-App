const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const authRoutes = require("../src/routes/auth.routes")
const userRoutes = require("../src/routes/user.routes")
const errorMiddleware = require("./controllers/errorMiddleware")

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    origin: process.env.CROSS_ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
)
app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use(errorMiddleware)

module.exports = app
