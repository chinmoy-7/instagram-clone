const jwt = require("jsonwebtoken")


const Auth=async(req,res,next)=>{
    try{
        const token = req.headers.authorization;
        if(token){
            jwt.verify(token,process.env.MY_JWT,(err,decoded)=>{
                if(err){
                    res.json({
                        status:"failed",
                    })
                }
                res.user_id=decoded.user_id
                next();
            })

        }
    }catch(e){
        res.json({
            status:"failed",
            message:e.message
        })
    }
}
module.exports =Auth;