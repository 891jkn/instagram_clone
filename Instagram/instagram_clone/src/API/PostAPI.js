import axios from "axios";

const URL = 'http://localhost:5000'

export const createPostAPI = async(post)=>{
    return await axios.post(`${URL}/post/create`,post).then((res)=>{
        return res.data
    }).catch(err=>err)
}
export const GetAllPost = async(userId)=>{
    return await axios.post(`${URL}/post/getAll`,{userId:userId}).then((res)=>{
        return res.data
    }).catch(err=>err)
}

export const Like = async(userId,postId)=>{
    return await axios.post(`${URL}/post/like`,{userId:userId,postId:postId}).then((res)=>{
        return res.data
    }).catch(err=>err)
}
export const Unlike = async(userId,postId)=>{
    return await axios.post(`${URL}/post/unlike`,{userId:userId,postId:postId}).then((res)=>{
        return res.data
    }).catch(err=>err)
}
export const CreateComment = async(userId,postId,content,parent)=>{
    return await axios.post(`${URL}/post/createComment`,{userId:userId,postId:postId,contents:content,parent:parent}).then((res)=>{
        return res.data
    }).catch(err=>err)
}