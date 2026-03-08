const mongoose = require("mongoose");

const connectDB = async ()=>{
    try {
        let res = await mongoose.connect(process.env.MONGO_URI);
        
        if (res) {
            console.log("mongodb connected successfully!")
        }
    } catch (error) {
        console.log("error in  connecting db -->",error)
    }
}

module.exports = connectDB;