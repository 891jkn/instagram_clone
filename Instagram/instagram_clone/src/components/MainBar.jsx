import React ,{useState,useEffect}from 'react'
import Posts from './Posts'
import Stories from './Stories'
import '../css/main_bar.css'
import Loading from './Loading'
import { useDispatch, useSelector } from 'react-redux'
import { clearState, setLoading, setUpdate, updatePosts, updateUser } from '../features/HomeReducer'
import { GetAllPost } from '../API/PostAPI'
import { GetUserAPI } from '../API/AccountAPI'
function MainBar() {
  const homeReducer = useSelector((state)=>state.homeReducer)
  const DIR = useDispatch()
  useEffect(async() => {
    DIR(clearState())
    let userId = localStorage.getItem('instagram_user_id') ||  null
    if(userId !== null){
      DIR(setLoading(true))
      let fetchUser = async()=>{
        const result = await GetUserAPI(userId)
        if(result){
          DIR(updateUser(result.data))
        }
      }
      let fetchPosts = async()=>{
        DIR(updatePosts(await GetAllPost(userId)))
      }
      await fetchUser()
      await fetchPosts()
      DIR(setLoading(false))
    }
    
  },[homeReducer.isUpdate])
  
  return (
    <>
    <div className='main-bar'>
        <div className='space-y-5 content '>
            <Stories/>
            <Posts/>
        </div>
    </div>
       
    </>
  )
}

export default MainBar