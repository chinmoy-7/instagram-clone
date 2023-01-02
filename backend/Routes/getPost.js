const router = require("express").Router()
const signup = require("../Models/signup")
const Auth = require('../Middlewear/Auth')
const posts = require("../Models/post")

//fetch current user details
router.get("/api/user",Auth,async (req,res)=>{
    try{
        // console.log(res.user_id)
        const user = await signup.find({_id:res.user_id})
        res.status(200).json(user)

    }catch(e){
        res.json({
            status:"failed",
            message:e.message
        })
    }
})
router.post("/upload",Auth,async (req,res)=>{
    try{
        const user = await signup.find({_id:res.user_id})
        // console.log(req.body.img)
        // console.log(user)
        const newPost = await posts.create({
            userId:user[0]._id,
            username:user[0].username,
            description:req.body.description,
            image:req.body.img.image
        })
        res.status(200).json({
            status:"success",
            message:"File uploaded succesfully"
        })
    }catch(e){
        res.json({
            status:"failed",
            message:e.message
        })
    }
})


module.exports = router