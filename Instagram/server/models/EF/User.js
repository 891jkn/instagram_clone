import mongoose from 'mongoose'
import sha256 from 'crypto-js/sha256.js'
const Schema = mongoose.Schema({
    email:{
        type:String,
        require:true,
        default:'user@gmail.com'
    },
    slogan:{
        type:String,
        require:true,
        default:'Follow me!'
    },
    nick_name:{
        type:String,
        require:true,
        default:"default"
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

Schema.method.setPassword = (password)=>{
    this.password = sha256(password)
}

Schema.method.validPassword = (password)=>{
    var hash = sha256(password)
    return this.password == hash
}


export const UserModel = mongoose.model('Users',Schema);

