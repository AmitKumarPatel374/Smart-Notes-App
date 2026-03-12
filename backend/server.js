const express = require("express")
const cors = require("cors")
const connectDB = require("./src/config/db")
const app  = require("./src/app")
require("dotenv").config()

connectDB()
const port = process.env.PORT
app.listen(port, () => {
  console.log("app is running in port 3000")
})
