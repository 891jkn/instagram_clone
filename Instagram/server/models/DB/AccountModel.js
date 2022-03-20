import { UserModel } from "../EF/User.js";
import { AsyncWrapper } from "../../middleware/asyncWrapper.js";
const UserLogin = async({email,password})=>{
    try{
        let user = await FindByEmail(email)
        if(user !== null && user !== undefined){
            return user.password === password ? {login:true,data:user._id} : {login:false,err:'password incorrect'};
        }
        return {login:false,err:'email or number phone valid'};  

    }catch(err){
        return err
    }
}
const UserRegister = async ({email,userName,password})=>{
    try{
        let new_user = new UserModel({
            email:email,
            password:password,
            userName:userName,
            account_state:1,
            active:false
        })
        await new_user.save()
        // get new user id
        let user = await FindByEmail(email);
        if(user!==null && user!==undefined) return {reg:true,data:user._id}
        return {reg:false,err:'cannot find new user'}
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