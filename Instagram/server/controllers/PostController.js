import { GetPostsOfFriend ,Create,GetAll} from "../models/DB/PostModel.js";
import { CreatePostComment } from "../models/DB/CommentModel.js";
import { LikePost,UnlikePost} from "../models/DB/LikeModel.js";
export const GetFriendPosts = async (req,res)=>{
    const userId = req.body.userId;
    res.send(await GetPostsOfFriend(userId))
}


export const CreateNewPost = async (req,res)=>{
    const post = {
        caption:req.body.caption,
        media:req.body.media,
        userId:req.body.userId
    }
    res.send(await Create(post))
}

export const GetAllPost = async(req,res)=>{
    const userId = req.body.userId
    res.send(await GetAll(userId))
}

export const Like = async(req,res)=>{
    const [userId,postId] = [req.body.userId,req.body.postId]
    res.send(await LikePost(postId,userId))
}

export const Unlike = async(req,res)=>{
    const [userId,postId] = [req.body.userId,req.body.postId]
    res.send(await UnlikePost(postId,userId))
}
export const CreateComment  = async(req,res)=>{
    const [userId,postId,contents,parent] = [req.body.userId,req.body.postId,req.body.contents,req.body.parent]
    res.send(await CreatePostComment(userId,postId,contents,parent))
}