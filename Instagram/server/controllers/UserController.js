import {GetUserProfileByPage } from '../models/DB/UserModel.js'
import  {GetSavedByUserId} from '../models/DB/SavedModel.js'
export const GetUserProfile = async(req,res)=>{
    const limit = 6
    const page = req.body.page
    const userId = req.body.userId
    const currentUserId = req.body.currentUserId
    res.send(await GetUserProfileByPage(userId,currentUserId,page,limit))
}
export  const GetUserSaved =  async (req,res)=>{
    const userId = req.body.userId;
    res.send(await GetSavedByUserId(userId))
}
