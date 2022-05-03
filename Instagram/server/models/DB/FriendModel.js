import { UserModel } from "../EF/User.js";
import { FriendModel } from "../EF/UserFriend.js";
import { GetFriends } from "./PostModel.js";

export const AddFriend = async (userId,friendId)=>{
    try{

        if(userId !== friendId){
            let hasFriend = await CheckHasFriend(userId,friendId)
            if(!hasFriend){
                let new_friend = new FriendModel({
                    userId:userId,
                    friendId:friendId,
                    InteractiveCount:0
                })
                await new_friend.save();
                return {data:true};
            }
        }
        return {data:false,err:'Have Friend'};
    }catch(err){
        return {data:false,err:err}
    }
}
export const CheckHasFriend = async (userId,friendId)=>{
    let friend = await FindFriendById(userId,friendId);
    if(friend){
        return true;
    }
    return false;
}
export const FindFriendById = async(userId,friendId)=>{
    try{
        let friend = await FriendModel.findOne({userId:userId,friendId:friendId}).exec()
        return friend;
    }catch(err){
        return false
    }
}
export const RemoveFriend = async (userId,friendId)=>{
    try{
        await FriendModel.deleteOne({userId:userId,friendId:friendId});
        return true;
    }catch(err){
        return "something err";
    }
}
export const GetFollowers = async(userId)=>{
    return await FriendModel.find({userId:userId}).exec()
}
export const GetFollowingSuggestions = async(userId)=>{

    try{

        let friends = await GetFriends(userId)
        let count = 0;
        let limit = 6;
        let SuggestFollow = []   
        if(friends){
          
            for(let i = 0 ; i < friends.length; i ++){
                let followings = await GetFollowers(friends[i].friendId);
                SuggestFollow = [...SuggestFollow,...followings]
            }
            let noFriends = SuggestFollow.filter((val)=>{
                return val.friendId !== userId
            })
            let result = []            
            for(let i = 0 ; i < noFriends.length ; i++){
                let user = await UserModel.findOne({userId:noFriends[i].userId}).exec()
                result.push(user)
            }
            SuggestFollow = result;
        }
        return {data:SuggestFollow}
    }catch(err){
        console.log({err:err})
    }

}