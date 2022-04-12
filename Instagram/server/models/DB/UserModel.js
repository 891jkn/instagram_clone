import { UserModel } from "../EF/User.js";
export const GetUserById = async(id)=>{
    return await UserModel.findOne({_id:id}).exec()
}
