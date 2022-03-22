import mongoose from "mongoose";


const Schema = mongoose.Schema({
    userId:{
        type:String,
        require:true
    },
    friendId :{
        type:String,
        require:true
    }
})
export const FriendModel = mongoose.model('Friends',Schema)