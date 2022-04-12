import { UserLogin  ,UserRegister} from "../models/DB/AccountModel.js";
import { GetUserById } from "../models/DB/UserModel.js";
export const LoginController = async (req,res)=>{
    let [email,password] = [req.body.email,req.body.password]
    return res.send(await UserLogin({email:email,password:password}))
}
export const Register = async (req,res)=>{
    let [email,password,userName] = [req.body.email,req.body.password,req.body.userName]
    return res.send(await UserRegister({email:email,userName:userName,password:password}))
}
export const GetUser = async(req,res)=>{
    try{
        const userId = req.body.userId
        const result = await GetUserById(userId)
        if(result){
            res.send({data:result,status:true})
        }
    }catch(err){
        console.log(err)
        res.send('something err')
    }
    
}