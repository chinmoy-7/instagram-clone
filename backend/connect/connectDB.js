const mongoose = require("mongoose");

const connectDB = ()=>{
    mongoose.set("strictQuery",false)
     mongoose.connect("mongodb+srv://root:root123@ultimateuser.bfaisa7.mongodb.net/?retryWrites=true&w=majority/instagram").then((res)=>{
        console.log("Connected to DB");
    }).catch(e=>{
        console.log(e.message)
    })
}

module.exports = connectDB;