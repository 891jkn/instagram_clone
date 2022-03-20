import axios from 'axios'
const URL = 'http://localhost:5000'
export const LoginAPI = async (props)=>{
    console.log(props)
    return await axios.post(`${URL}/Account/login`,props).then((res)=>{
        return res.data
    }).catch(err=>err)
} 
export const RegisterAPI =  async (props)=>{
    console.log(props)
    return await axios.post(`${URL}/Account/Register`,props).then((res)=>{
        return res.data
    }).catch(err=>err)
}