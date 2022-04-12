import axios from "axios";

const URL = 'http://localhost:5000'

export const SearchAPI = async(key)=>{
    return await axios.post(`${URL}/search/searchUser`,{key:key}).then((res)=>{
        return res.data
    }).catch(err=>err)
}