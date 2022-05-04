import { PostModel } from "../EF/Post.js";
import { MediaModel } from "../EF/Media.js";
import { FriendModel } from "../EF/UserFriend.js";
import { AsyncWrapper } from "../../middleware/asyncWrapper.js";
import { UserModel } from "../EF/User.js";
import { GetUserById } from "./UserModel.js";
import {LikeModel} from '../EF/Like.js'
import {CommentModel} from '../EF/Comment.js'
import { CreatePostComment } from "./CommentModel.js";
export const GetPostsOfFriend = async(userId)=>{
    try{
        const friendsId = await GetFriends(userId);
        const posts = []
        console.log(friendsId)
        for(let id of friendsId){
            let post =  await PostModel.find({userId:id.friendId}).sort({updatedAt:-1}).limit(1).exec()
            if(post!==null && post!== undefined){
                posts.push(post)
            }
        }
        return posts;
    }catch(err){
        return err
    }
}
export const GetLatestPost = async (userId)=>{
    return await PostModel.findOne({userId:userId}).sort({createdAt:-1}).limit(1).exec()
}
export const Create = async(post)=>{
    try{
        let newPost = new PostModel({
            caption:post.caption,
            userId:post.userId
        })
      
        await newPost.save()
        // get new  Post
        let latestPost = await GetLatestPost(post.userId)
        console.log(latestPost)
        let newMedia = new MediaModel({
            relationId:'POST'+latestPost._id.toString(),
            path:post.media,
        })
        await newMedia.save()
        return {result:true}
    }catch(err){
        return  'Some thing err , when create , please reload website..'
    }
}
export const GetFriends = async(userId)=>{
    return await FriendModel.find({userId:userId}).select('friendId').limit(6).exec()
}
export const GetAllFriend = async(userId)=>{
    return await FriendModel.find({friendId:userId}).select('_id').exec()
}

export const GetNewPostsByPage = async (page,limit = {friend:6,self:1}) =>{

    // get friend new post limit 6  


    // get self post limit 1
}
export const GetCountFriendsPosts = async (userId) =>{
    const friends = await FriendModel.find({friendId:userId}).select('_id').exec()
    let count = 0
    friends.forEach((val,key)=>{
        let friendPosts = PostModel.find({userId:val.toString()}).exec()
        count+=friendPosts.length
    })
    return count;
}
export const GetPages = async(total,limit)=>{
    return Math.ceil(total/limit)
}
export const GetPostByPage  = async (userId,page,limit)=>{
    try{
          // get following 
        let followings = await FriendModel.find({userId:userId}).sort({InteractiveCount:-1}).skip((Math.ceil(Math.random() * page) - 1) * limit).limit(6).exec()
        let postOfFollowings = []
        if(followings.length > 0){
            for(let i = 0 ; i< followings.length ;i++){
                let posts = await PostModel.find({userId:followings[i].friendId}).skip((page-1)*limit).limit(limit).exec()
                if(posts.length > 0){
                    let postHasMedia = []
                    for(let i = 0 ; i < posts.length ; i++){
                        // get media each post
                        let media = await MediaModel.findOne({relationId:'POST'+posts[i]._id.toString()}).exec()
                        // get like count
                        const likes = await LikeModel.find({postId:posts[i]._id,isLike:true}).count().exec()
                        const hasLike = await LikeModel.findOne({postId:posts[i]._id.toString(),userId:userId,isLike:true}).exec()
                        // get comment each post
                        const commentsNoUser = await CommentModel.find({postId:posts[i]._id,parentId:0}).sort({createdAt:-1}).limit(3).exec()
                        const comments = []
                        const totalComment = await CommentModel.find({postId:posts[i]._id}).count().exec()
                        for(let i = 0 ; i < commentsNoUser.length ; i++){
                            let user =  await GetUserById(commentsNoUser[i].userId)
                            let comment = {id:commentsNoUser[i]._id.toString(),content:commentsNoUser[i].content,parentId:commentsNoUser[i].parentId,user:user}
                            comments.unshift(comment)
                        }
                        let postUser = await GetUserById(posts[i].userId)
                        // create data return
                        // return  media
                        let post = {
                            caption:posts[i].caption,
                            userId:posts[i].userId,
                            _id:posts[i]._id.toString(),
                            media:{
                                _id:(media._id.toString() || null),
                                relationId:media.relationId,
                                path:media.path
                            },
                            user:postUser,
                            likes:likes,
                            hasLike:hasLike !== null ? true : false,
                            comments:comments,
                            createdAt:posts[i].createdAt,
                            updatedAt:posts[i].updatedAt,
                            totalComment:totalComment
                        }
                        // push post
                        postHasMedia.unshift(post)
                    }
                    postOfFollowings.push(...postHasMedia)
                }
            }
        }// get posts of following


        // get post of user

        return postOfFollowings;
    }catch(err){
        console.log(err)
        return "Something err"
    }
  

}
export const GetAll = async (userId)=>{
    try{
        // get post
        const selfPostNoMedia = await PostModel.find({userId:userId}).exec()
        //get user
        const user = await GetUserById(userId)
        const selfPostHasMedia = []
        for(let i = 0 ; i< selfPostNoMedia.length;i++){
            // get media each post
            let media = await MediaModel.findOne({relationId:'POST'+selfPostNoMedia[i]._id.toString()}).exec()
            // get like count
            const likes = await LikeModel.find({postId:selfPostNoMedia[i]._id,isLike:true}).count().exec()
            const hasLike = await LikeModel.findOne({postId:selfPostNoMedia[i]._id.toString(),userId:userId,isLike:true}).exec()
            // get comment each post
            const commentsNoUser = await CommentModel.find({postId:selfPostNoMedia[i]._id,parentId:0}).sort({createdAt:-1}).limit(3).exec()
            const comments = []
            const totalComment = await CommentModel.find({postId:selfPostNoMedia[i]._id}).count().exec()
            for(let i = 0 ; i < commentsNoUser.length ; i++){
                let user =  await GetUserById(commentsNoUser[i].userId)
                let comment = {id:commentsNoUser[i]._id.toString(),content:commentsNoUser[i].content,parentId:commentsNoUser[i].parentId,user:user}
                comments.unshift(comment)
            }
            // create data return
            let post = {
                caption:selfPostNoMedia[i].caption,
                userId:selfPostNoMedia[i].userId,
                _id:selfPostNoMedia[i]._id.toString(),
                media:{
                    _id:media._id.toString(),
                    relationId:media.relationId,
                    path:media.path
                },
                user:user,
                likes:likes,
                hasLike:hasLike !== null ? true : false,
                comments:comments,
                createdAt:selfPostNoMedia[i].createdAt,
                updatedAt:selfPostNoMedia[i].updatedAt,
                totalComment:totalComment
            }
            // push post
            selfPostHasMedia.unshift(post)
        }
        // const allPosts = [...selfPostNoMedia]
        // const friends = await GetAllFriend(userId)
        // console.log(friends)
        // for(let i = 0;i<friends.length;i++){
        //     let id = friends[i].toString()
        //     console.log(i)
        //     // let arrayPosts =  await PostModel.find({userId:id}).exec()
        //     // arrayPosts.forEach((val,key)=>{
        //     //     val._id = val._id.toString()
        //     // })
        // }
        // console.log(allPosts)
        return selfPostHasMedia
    }catch(err){
        console.log(err)
        return 'Something err...'
    }

}

export const RemovePost = async(postId)=>{
    
}



