import mongoose from 'mongoose'

const Schema = mongoose.Schema({
    email:{
        type:String,
        require:true,
        default:'user@gmail.com'
    },
    password:{
        type:String,
        require:true,
        default:'Anonymous'
    },
    number_phone:{
        type:String
    },
    user_name:{
        type:String,
        require:false,
        default:'Anonymous'
    },
    account_state:{
        type:Number,
        require:true,
        default:1,// 1 is active , 0 is block , 
    },
    active:{
        type:Boolean,
        require:true,
        default:false
    },
},{timestamps:true})
export const UserModel = mongoose.model('Users',Schema);