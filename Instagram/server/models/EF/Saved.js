import mongoose from "mongoose";

const Schema = mongoose.Schema({
    userId:{require:true,type:String},
    postId:{require:true,type:String},
},{timestamps:true})
export  const SavedModel = mongoose.model('Saveds',Schema)
