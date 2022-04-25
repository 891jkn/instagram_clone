import { FriendModel } from "../EF/UserFriend.js";

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