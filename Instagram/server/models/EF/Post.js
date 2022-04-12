import mongoose from 'mongoose'



const Schema = mongoose.Schema({
    caption:{
        type:String,
        require:true,
        default:'instagram default post'
    },
    userId:{
        type:String,
        require:true
    },
},{timestamps:true})
export const PostModel = mongoose.model('Posts',Schema)