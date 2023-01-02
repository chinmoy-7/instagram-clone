const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    userId:String,
    username:String,
    description:String,
    image:String
})

const post = mongoose.model("post",postSchema);
module.exports = post;