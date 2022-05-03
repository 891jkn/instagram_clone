import { AddFriend, RemoveFriend ,GetFollowingSuggestions} from "../models/DB/FriendModel.js";
export const AddNewFriend = async(req,res)=>{
    const [userId,friendId] = [req.body.userId,req.body.friendId]
    res.send(await AddFriend(userId,friendId))
}
export const UnFriend = async(req,res)=>{
    const [userId,friendId] = [req.body.userId,req.body.friendId]
    res.send(await RemoveFriend(userId,friendId))
}
export const GetFollowingSuggest = async(req,res)=>{
    const userId = req.params.userId;
    console.log(userId)
    res.send(await GetFollowingSuggestions(userId))
}