import { UserModel } from "../EF/User.js"

export const SearchUserByKey = async(key)=>{
    try{
        let reg = new RegExp(key,'i')
        let users = await UserModel.find({user_name:reg}).exec()
        if(users!==null){
            return {data:users,key:key}
        }    
    }catch(err){
        console.log(err)
        return {data:false,err:err}
    }

}