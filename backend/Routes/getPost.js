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

//Upload a post
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

//Get all The Posts
router.get("/api/post",Auth,async (req,res)=>{
    try{
        const allPosts = await posts.find({userId:res.user_id})
        res.json(allPosts)
    }catch(e){
        res.json({
            status:"failed",
            message:e.message
        })
    }
})

//Delete a post
router.delete("/api/delete/:id",Auth,async (req,res)=>{
    try{
        const {id}=req.params
        await posts.deleteOne({_id:id})
        res.json({
            status:"success",
            message:"Post successfully deleted"
        })
    }catch(e){
        res.json({
            status:"failed",
            message:e.message
        })
    }
})


module.exports = router