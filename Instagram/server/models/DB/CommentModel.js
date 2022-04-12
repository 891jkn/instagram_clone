import { CommentModel } from "../EF/Comment.js";
import { UserModel } from "../EF/User.js";
import { GetUserById } from "./UserModel.js";
export const CreatePostComment = async(userId,postId,content,parentId = 0)=>{
    try{
        let new_comment = new CommentModel({
            userId:userId,
            postId:postId,
            content:content,
            parentId:parentId !== undefined ? parentId : 0
        })
        await new_comment.save()
        return {data:true,comment:new_comment}
    }catch(err){
        console.log(err)
        return 'something err'
    }
}

