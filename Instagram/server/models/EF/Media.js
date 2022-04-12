import mongoose from "mongoose";

const Schema = mongoose.Schema({
    relationId :{
        type:String,
        require:true
    },
    path:{
        type:String,
        require:true
    },
    postId:{type:String,require:true}
},{timestamps:true})
export const MediaModel = mongoose.model('Medias',Schema)