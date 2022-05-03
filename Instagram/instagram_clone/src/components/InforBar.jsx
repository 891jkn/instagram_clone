import React, { useEffect, useState } from 'react'
import defaultuserimg from '../images/user.png'
import { Link, useNavigate } from 'react-router-dom'
import InfoToast from './ToastInfo'
import { useSelector,useDispatch } from "react-redux";
import { clearState } from '../features/HomeReducer';
function handleLogout (){
    window.localStorage.removeItem('instagram_user_id')
    return true;
}
function InforBar({userInfo,toastInfo = false,switchAccount = false,suggests = false,user = null}) {
    let [Toast,setToast] = useState(null)
    const homeReducer = useSelector((state)=>state.homeReducer)
    const navigate = useNavigate()
    const DIR = useDispatch()
    return (
        <>
        {suggests && user ? 
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
             }}>
                 <Link to={`/user/${user._id}`}>
                     {user.user_name}
                 </Link>
             {Toast}
             </strong>
             <p className={`text-${userInfo.nickname.font_size} font-${userInfo.nickname.font_weight} text-${userInfo.nickname.font_color} cursor-pointer`}> {user.nick_name}</p>
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
         : 
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
                        
                    }}>
                        <Link to={`/user/${homeReducer.values.user.id}`}>
                            {homeReducer.values.user!==null?homeReducer.values.user.user_name:'anonymous'}
                        </Link>
                        
                    {Toast}
                    </strong>
                    <p className={`text-${userInfo.nickname.font_size} font-${userInfo.nickname.font_weight} text-${userInfo.nickname.font_color} cursor-pointer`}>{homeReducer.values.user!==null?homeReducer.values.user.nickname:'anonymous'}</p>
                </div>
                <div className='text-right flex-auto'>
                    <a className='text-blue-400 text-xs font-semibold hover:cursor-pointer' onClick={()=>{
                       if(switchAccount){
                           DIR(clearState())
                            handleLogout()?navigate('/Login'):alert('wrong')
                       }
                    }}>{userInfo.option.link}</a>
                </div>
            </div>
        }
        </>
    )
   
}

export default InforBar