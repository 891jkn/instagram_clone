import React ,{useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetFollowingSuggest } from '../API/FriendAPI'
import { updateFollowing } from '../features/HomeReducer'
import userimg from '../images/user.png'
import InforBar from './InforBar'
import InfoToast from './ToastInfo'
function SuggestionFollow() {
    const DIR = useDispatch()
    const homeReducer = useSelector((state)=>state.homeReducer)
    
    useEffect(async() => {
    
        let followingSuggestion = async()=>{
            return await GetFollowingSuggest(localStorage.getItem("instagram_user_id"))
        }
        let result = await followingSuggestion();
        DIR(updateFollowing(result.data))
    }, [])
    let infoBarProps = {
        username:{
            font_size:'xs',
            font_weight:'semibold',
            font_color:'gray-500'
        },
        nickname:{
            font_size:'xs',
            font_weight:'semibold',
            font_color:'gray-400'
        },
        img:{
            width:'10'
        },
        option:{
            link:'Follow'
        }
    }
    return (
        <>
        
        <div className='flex flex-row justify-between my-4'>
            <h4 className='text-sm font-semibold text-gray-500'>Suggestion for you</h4>
            <a className='text-gray-600 text-sm font-semibold'>See all</a>
        </div>
        <ul className='flex flex-col pl-2'>
            {homeReducer.values.followings.map((val,index)=>{
                return (
                   
                    <li key={index}>
                        <InforBar userInfo={{...infoBarProps,id:val}}  toastInfo={true} suggests = {true} user={val}/>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default SuggestionFollow