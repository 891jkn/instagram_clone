import { LikeModel } from "../EF/Like.js"
export const LikePost = async(postId,userId)=>{
    try{
        const like = await LikeModel.findOne({postId:postId,userId:userId}).exec()
        if(like!== null && like !== undefined ){
            await LikeModel.updateOne({postId:postId,userId:userId},{isLike:true})
        }else{
            const new_like = new LikeModel({
                postId:postId,
                userId:userId,
                isLike:true
            })    
            await new_like.save()
        }
        return {data:true}
    }catch(err){
        console.log(err)
        return {date:false}
    }
}

export const UnlikePost =  async(postId,userId)=>{
    try{
        console.log('here')
        await LikeModel.updateOne({postId:postId,userId:userId},{isLike:false})
        return {data:true}
    }catch(err){
        console.log(err)
        return {data:false}
    }
}