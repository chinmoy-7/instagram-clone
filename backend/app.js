const express = require("express");
const dotenv = require("dotenv"); 
const connectDB = require("./connect/connectDB")

const app = express();
dotenv.config();



app.listen(process.env.PORT,async ()=>{
    await connectDB();
    console.log(`The server is up at ${process.env.PORT}`);
})