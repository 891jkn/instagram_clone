import React ,{useState,useEffect,useLayoutEffect, useRef}from 'react'
import Posts from './Posts'
import Stories from './Stories'
import '../css/main_bar.css'
import  PaginatePostLoading from './PaginatePostLoading'
import { useDispatch, useSelector } from 'react-redux'
import { clearStateAndShowLoading, setLoading, setUpdate, updatePosts, updatePostsAndIsUpdate, updateUserAndPostAndHideLoading} from '../features/HomeReducer'
import { GetAllPost } from '../API/PostAPI'
import { GetUserAPI } from '../API/AccountAPI'
function MainBar() {
  const homeReducer = useSelector((state)=>state.homeReducer)
  const [fetching,setFetching]  = useState(false)
  const [nothing,setNothing] = useState(false)
  const [currentPage,setCurrentPage] = useState(1)
  const postContainer  = useRef(null)
  const DIR = useDispatch()
  useEffect(async() => {
    let userId = localStorage.getItem('instagram_user_id') ||  null
    let fetchUser = async()=>{
      const result = await GetUserAPI(userId)
      if(result){
        return result.data;
      }
    }
    let fetchPosts = async(userId,page)=>{
      const result = await GetAllPost(userId,page)
      if(result){
        return result
      }
    }

    if(userId !== null){
        DIR(setLoading(true))
        let user = await fetchUser()
        let posts = await fetchPosts(userId,currentPage)
        if(posts.length > 0 && !nothing){
            let allPosts = [...homeReducer.values.posts]
            posts.forEach((val,index)=>{
              allPosts.push(val)
            })
            DIR(updateUserAndPostAndHideLoading({user:user,posts:allPosts,isLoading:false,isUpdate:false}))
          setFetching(false)
        }else{
            setFetching(false)
            setNothing(c=>true)
            DIR(setLoading(false))
        }
    }
  },[homeReducer.values.isUpdate])
  const handleScrollToLoadPage  = async(e)=>{
    let react = postContainer.current.getBoundingClientRect();
    let bones = (Math.floor(react.height) / 100 * 16) + 1000;
    let positionToPage = react.height - bones;
    if( react.top < 0 && react.top < -positionToPage && !fetching && !nothing){
      setCurrentPage(c=>c+1);
      DIR(setUpdate(true))
      setFetching(true)
    }
  }
  return (
    <>
    <div className='main-bar'  onScroll={handleScrollToLoadPage}>
        <div className='space-y-5 content' ref={postContainer}>
            <Stories/>
            <Posts fetching={fetching} nothing = {nothing}/>
        </div>
    </div>
    </>
  )
}

export default MainBar