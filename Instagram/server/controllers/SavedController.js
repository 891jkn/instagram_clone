import {CreateSaved, DeleteSaved} from "../models/DB/SavedModel.js";

export const Create= async(req,res)=>{
    const [userId,postId] = [req.body.userId,req.body.postId]
    res.send(await CreateSaved(userId,postId))
}
export const Delete = async (req,res)=>{
    let [userId,postId] = [req.body.userId,req.body.postId]
    res.send(await DeleteSaved(userId,postId))
}