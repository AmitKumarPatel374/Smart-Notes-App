const express = require("express")
const cors = require("cors");
const connectDB = require("./src/config/db");
require("dotenv").config();

connectDB();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log("app is running in port 3000");
})