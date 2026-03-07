const express = require("express")
const cors = require("cors")
require("dotenv").config();

const app = express();


const port = process.env.PORT;
app.listen(port, ()=>{
    console.log("app is running in port 3000");
})