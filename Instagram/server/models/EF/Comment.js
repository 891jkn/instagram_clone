import mongoose from "mongoose";

const Schema = mongoose.Schema({

    postId:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    },
    parentId:{
        type:String,
        require:true,
        default:0
    },
},{timestamps:true})
export const CommentModel = mongoose.model('Comments',Schema)