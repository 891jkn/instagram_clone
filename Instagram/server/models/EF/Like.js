import mongoose from "mongoose";

const Schema = mongoose.Schema({
    postId:{
        type:String,
        require:true,
        default:''
    },
    userId:{
        type:String,
        require:true
    },
    isLike:{
        type:Boolean,
        require:true,
        default:true // 0 is unlike , 1is like
    },
},{timestamps:true})

export const LikeModel = mongoose.model('Likes',Schema)
