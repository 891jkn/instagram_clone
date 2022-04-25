import {GetUserProfileByPage} from '../models/DB/UserModel.js'
export const GetUserProfile = async(req,res)=>{
    const limit = 6
    const page = req.body.page
    const userId = req.body.userId
    const currentUserId = req.body.currentUserId
    res.send(await GetUserProfileByPage(userId,currentUserId,page,limit))
}