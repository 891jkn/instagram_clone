import React, { useEffect, useState } from 'react'
import defaultuserimg from '../images/user.png'
import { useNavigate } from 'react-router-dom'
import InfoToast from './ToastInfo'
import { useSelector,useDispatch } from "react-redux";
function handleLogout (){
    window.localStorage.removeItem('instagram_user_id')
    return true;
}
function InforBar({userInfo,toastInfo = false,switchAccount = false}) {
    let [Toast,setToast] = useState(null)
    
    const homeReducer = useSelector((state)=>state.homeReducer)
    console.log(homeReducer)
    const navigate = useNavigate()
    return (
        <>
            <div className='flex flex-row items-center py-2 space-x-5'>
                <div>
                    <img src={defaultuserimg} className={`w-${userInfo.img.width}`}/>
                </div>
                <div className=''>
                    <strong className={`cursor-pointer text-${userInfo.username.font_size} font-${userInfo.username.font_weight} text-${userInfo.username.font_color} relative`} onMouseEnter={
                        ()=>{
                            setTimeout(()=>{
                                if(toastInfo){
                                    setToast(<InfoToast userId={1} hidden=''/>)
                                }
                            },0)
                        }
                    } onMouseLeave={()=>{
                        setToast(<InfoToast userId={1} hidden='hidden'/>)
                        
                    }}>{homeReducer.values.user!==null?homeReducer.values.user.user_name:'anonymous'}
                    {Toast}
                    </strong>
                    <p className={`text-${userInfo.nickname.font_size} font-${userInfo.nickname.font_weight} text-${userInfo.nickname.font_color} cursor-pointer`}>{homeReducer.values.user!==null?homeReducer.values.user.user_name:'anonymous'}</p>
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