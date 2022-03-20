import React from 'react'
import defaultuserimg from '../images/user.png'
function InforBar({userInfo}) {
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
    return (
        <>
            <div className='flex flex-row items-center py-2 space-x-5'>
                <div>
                    <img src={defaultuserimg} className={`w-${userInfo.img.width}`}/>
                </div>
                <div className=''>
                    <strong className={`text-${userInfo.username.font_size} font-${userInfo.username.font_weight} text-${userInfo.username.font_color}`}>{user.username}</strong>
                    <p className={`text-${userInfo.nickname.font_size} font-${userInfo.nickname.font_weight} text-${userInfo.nickname.font_color}`}>{user.nickname}</p>
                </div>
                <div className='text-right flex-auto'>
                    <a className='text-blue-400 text-xs font-semibold'>{userInfo.option.link}</a>
                </div>
            </div>
        </>
    )
   
}

export default InforBar