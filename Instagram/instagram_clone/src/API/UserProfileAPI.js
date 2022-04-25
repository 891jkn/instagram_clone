import axios from 'axios'
const URL = 'http://localhost:5000'
export const GetUserProfile = async(userId,currentUserId,page)=>{
    return await axios.post(`${URL}/user/getUserProfile`,{userId:userId,page:page,currentUserId:currentUserId}).then((res)=>{
        return res.data;
    })
}
export const Follow = async(userId,friendId)=>{
    return await axios.post(`${URL}/friend/addFriend`,{userId:userId,friendId:friendId}).then((res)=>{
        return res.data;
    })
}
export const UnFollow = async (userId,friendId) =>{
    return await axios.post(`${URL}/friend/unFriend`,{userId:userId,friendId:friendId}).then((res)=>{
        return res.data;
    })
}