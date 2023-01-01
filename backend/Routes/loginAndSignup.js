const router = require("express").Router();
const signup = require("../Models/signup")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

//Signup Route
router.post("/signup",async (req,res)=>{
    try{
        const {email,fullname,username,password}=req.body;
        const check = await signup.find({email:req.body.email})
        if(check.length!=0){
            return res.status(400).json({
                status:"failed",
                message:"User already Exists"
            })
        }
        bcrypt.hash(password,10,async (err,hash)=>{
            if(err){
                return res.status(400).json({
                    status:"failed",
                    message:err.message
                })
            }
            const user = await signup.create({
                email:email,
                fullname:fullname,
                username:username,
                password:hash
            })
            res.status(200).json({
                status:"success",
                user
            })
        })
    }catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        })
    }
})

//login route
router.post("/login",async (req,res)=>{
    try{
        const {email,password}=req.body;
        const user = await signup.find({email:req.body.email});
        if(user.length==0){
            return res.status(404).json({
                status:"failed",
                message:"No user Found"
            })
        }
        bcrypt.compare(password,user[0].password,(err,result)=>{
            if(result){
                const token = jwt.sign({user_id:user[0]._id},process.env.MY_JWT)
                return res.status(200).json({
                    status:"success",
                    message:"Logged in",    
                    token
                })
            }else{
                res.status(404).json({
                    status:"failed",
                    message:"password didn't match"
                })
            }
        })
    }catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        })
    }
})
module.exports = router;