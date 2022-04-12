import { UserModel } from "../EF/User.js";
import { AsyncWrapper } from "../../middleware/asyncWrapper.js";
import {Harsher,Valid} from '../../helpers/Harsher.js'
const UserLogin = async({email,password})=>{
    try{
        let user  = await UserModel.findOne({email:email,account_state:1}).exec()
        if(user !== null && user !== undefined){
            return Valid(user.password,password) ? {login:true,data:user._id} : {login:false,err:'password incorrect'};
        }
        return {login:false,err:'email or number phone valid'};  

    }catch(err){
        return err
    }
}

const HasUser = async (email)=>{
   let user = await FindByEmail(email);
   if(user!==null && user!== undefined) return false
   return true
}
const UserRegister = async ({email,userName,password})=>{
    try{
        // check user 
        const isHasUser = await HasUser(email);
        if(isHasUser){
           
            let new_user = new UserModel({
                email:email,
                user_name:userName,
                account_state:1,
                active:false
            })
            //set password hashed
            new_user.password = Harsher(password)
            await new_user.save()
            console.log('here')
            // get new user id
            let user = await FindByEmail(email);
            if(user!==null && user!==undefined) return {reg:true,data:user._id}
            return {reg:false,err:'cannot find new user'}
        }
        return {reg:false,err:'User has already taken!'}
    }catch(err){
        return err
    }
}


const FindByEmail = async (email)=>{
   try{
       return await UserModel.findOne({email:email}).exec()
   }catch(err){
       return err;
   }
}
export { UserLogin,UserRegister } 