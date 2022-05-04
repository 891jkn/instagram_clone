import { UserModel } from "../EF/User.js";
import {PostModel} from '../EF/Post.js'
import {MediaModel} from  '../EF/Media.js'
import { CommentModel } from "../EF/Comment.js";
import {LikeModel} from '../EF/Like.js'
import { FriendModel } from "../EF/UserFriend.js";
export const GetUserById = async(id)=>{
    try{
        let user =  await UserModel.findOne({_id:id}).exec()
        let media = await MediaModel.findOne({relationId:'USER'+id})
        if(user!==null){
            let newUser = {
                id:user._id.toString(),
                email:user.email,
                user_name:user.user_name,
                account_state:user.account_state,
                active:user.active,
                avatar:media||null,
                createdAt:user.createdAt,
                updateAt:user.updateAt
            }
            return newUser;
        }
        return null;
    }catch(err){
        return {data:err}
    }
   
}
export const GetUserPostByPage = async(userId,page,limit)=>{
    try{
        let postsHasNoMedia = await PostModel.find({userId:userId}).sort({updateAt:-1}).limit(limit).skip((page-1)*limit).exec()
        let postHasMedia = []
        for(let i =  0; i < postsHasNoMedia.length ; i ++){
            let media = await MediaModel.findOne({relationId:'POST'+postsHasNoMedia[i]._id.toString()}).exec()
            let commentCount = await CommentModel.find({postId:postsHasNoMedia[i]._id.toString()}).count().exec()
            let likeCount = await LikeModel.find({postId:postsHasNoMedia[i]._id.toString()}).count().exec()
            if(media){
                let post = {
                    id:postsHasNoMedia[i]._id.toString(),
                    caption:postsHasNoMedia[i].caption,
                    userId:postsHasNoMedia[i].userId,
                    commentCount:commentCount,
                    likeCount:likeCount,
                    media:media.path
                }
                postHasMedia.push(post)
            }
        }
        return postHasMedia;
    }catch(err){
        console.log(err)
        return {data:'something err'}
    }
}
export const GetUserFollowing = async(userId)=>{
    let friends = await FriendModel.find({userId:userId}).count().exec();
    return friends;
}
export const GetUserFollower = async (userId)=>{
    let friends = await FriendModel.find({friendId:userId}).count().exec();
    return friends;
}
export const GetPostCountByUserId = async(userId)=>{
    try{
        return await PostModel.find({userId:userId}).count().exec()
    }catch (err){
        console.log(err)
        return "Something err"
    }
}
export const GetUserProfileByPage = async(userId,currentUserId,page,limit)=>{
    try{
        let haveFriend = false;
        if(userId!==currentUserId){
            let relation = await FriendModel.findOne({userId:currentUserId,friendId:userId}).count().exec();
            if(relation > 0){
                haveFriend = true;
            }
        }
        let user = await GetUserById(userId)
        let posts = await GetUserPostByPage(userId,page,limit)
        let allPostCount = await GetPostCountByUserId(userId)
        user.following = await GetUserFollowing(userId);
        user.follower = await GetUserFollower(userId);
        user.haveFriend = haveFriend;
        if(user && posts){
            let userProfile ={user:{...user},posts:{...posts},postCount:allPostCount||[]}
            return userProfile
        }
        return []
    }catch(err){
        console.log(err)
        return {data:'something err'}
    }
    

}