const router = require("express").Router();
const signup = require("../Models/signup")
const bcrypt = require("bcrypt");
const e = require("express");

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


module.exports = router;