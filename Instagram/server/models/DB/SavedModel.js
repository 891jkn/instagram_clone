import {SavedModel} from "../EF/Saved.js";
import {PostModel} from "../EF/Post.js";
import {ResponseHelper} from "../../helpers/ResponseHelper.js";

export  const GetSavedByUserId = async  (userId)=>{
    try{
        let saveds = await  SavedModel.find({userId:userId}).exec()
        let allSaved = []
        if (saveds.length > 0){
            for (let i = 0 ; i < saveds.length ; i ++){
                let post = await PostModel.findOne({userId:saveds[i].userId}).exec();
                if (post){
                    // make data to return
                    let saved = {
                        id:saveds[i]._id.toString(),
                        userId:saveds[i].userId,
                        postId:saveds[i].postId,
                        post:{...post,_id:post._id.toString()}
                    }
                    allSaved.unshift(saved)
                }
            }
            return {data:allSaved,message:"Success"}
        }
        return {data:[],message:"No Saved"}
    }catch (err){
        console.log(err)
        return {message:err,data:[]}
    }
}
export const CreateSaved = async (userId,postId)=>{
    try{
        let new_saved = new SavedModel({
            userId,
            postId
        })
        await new_saved.save()
        return ResponseHelper({code:200,result:true,data:new_saved,message:'Success'})
    }catch (err){
        return ResponseHelper({code:200,message:err})
    }
}
export const DeleteSaved = async(userId,postId)=>{
    try{
        await SavedModel.findOneAndDelete({userId:userId,postId:postId}).exec()
        return ResponseHelper({code:200,result:true,message:'Success'})
    }catch (err){
        return ResponseHelper({code:200,message:err})
    }
}