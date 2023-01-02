const express = require("express");
const dotenv = require("dotenv"); 
const connectDB = require("./connect/connectDB")
const cors = require("cors")
const login = require("./Routes/loginAndSignup")
const posts = require("./Routes/getPost")
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json({limit:"5mb"}));

//routes
app.use("/",login)
app.use("/",posts)


app.listen(process.env.PORT,async ()=>{
    await connectDB();
    console.log(`The server is up at ${process.env.PORT}`);
})