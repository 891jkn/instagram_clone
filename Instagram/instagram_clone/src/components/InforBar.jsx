import React, { useEffect, useState } from 'react'
import defaultuserimg from '../images/user.png'
import { useNavigate } from 'react-router-dom'
import InfoToast from './ToastInfo'
function handleLogout (){
    window.localStorage.removeItem('instagram_user_id')
    return true;
}
function InforBar({userInfo,toastInfo = false,switchAccount = false}) {
    const navigate = useNavigate()
    // default user
    let user = {
        username:'Dang Duy Khanh',
        nickname:'Jack',
        age:18,
        loginname:'dangkhanh',
        email:"dangk13122002@gmail.com",
        password:'13122002'
    }

    if(userInfo.user !== undefined){
        console.log('change user')
        user = userInfo.user
    }
    //  import toast
    let [Toast,setToast] = useState(null)
    return (
        <>
            <div className='flex flex-row items-center py-2 space-x-5'>
                <div>
                    <img src={defaultuserimg} className={`w-${userInfo.img.width}`}/>
                </div>
                <div className=''>
                    <strong className={`text-${userInfo.username.font_size} font-${userInfo.username.font_weight} text-${userInfo.username.font_color} relative`} onMouseEnter={
                        ()=>{
                            setTimeout(()=>{
                                if(toastInfo){
                                    setToast(<InfoToast userId={1} hidden=''/>)
                                }
                            },0)
                        }
                    } onMouseLeave={()=>{
                        setToast(<InfoToast userId={1} hidden='hidden'/>)
                    }}>{user.username}
                    {Toast}
                    </strong>
                    <p className={`text-${userInfo.nickname.font_size} font-${userInfo.nickname.font_weight} text-${userInfo.nickname.font_color}`}>{user.nickname}</p>
                </div>
                <div className='text-right flex-auto'>
                    <a className='text-blue-400 text-xs font-semibold hover:cursor-pointer' onClick={()=>{
                       if(switchAccount){
                           console.log('logoff')
                            handleLogout()?navigate('/Login'):alert('wrong')
                       }
                    }}>{userInfo.option.link}</a>
                </div>
            </div>
        </>
    )
   
}

export default InforBar