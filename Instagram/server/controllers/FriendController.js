import { AddFriend, RemoveFriend } from "../models/DB/FriendModel.js";
export const AddNewFriend = async(req,res)=>{
    const [userId,friendId] = [req.body.userId,req.body.friendId]
    res.send(await AddFriend(userId,friendId))
}
export const UnFriend = async(req,res)=>{
    const [userId,friendId] = [req.body.userId,req.body.friendId]
    res.send(await RemoveFriend(userId,friendId))
}