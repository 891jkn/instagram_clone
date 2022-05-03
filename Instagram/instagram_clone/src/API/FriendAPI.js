import axios from "axios";
const URL = "http://localhost:5000"
export const GetFollowingSuggest = async(userId)=>{
    return await axios.get(`${URL}/friend/getFollowingSuggest/${userId}`).then((res)=>{
        return res.data
    })
}