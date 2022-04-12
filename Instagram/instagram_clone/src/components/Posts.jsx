import React,{useEffect} from "react";
import { useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import {setLoading, setUpdate, updatePosts} from '../features/HomeReducer'
import "../css/posts.css";
import InfoToast from "./ToastInfo";
import { GetAll, Like, Unlike } from '../API/PostAPI';
import Loading from "./Loading";
import PostLoading from "./PostLoading";
import ImagePost from "./Post";

function Posts() {
  const [loading,setShowLoading] = useState(true)
  const homeReducer = useSelector((state)=>state.homeReducer)
  const DIR = useDispatch()
 
  return (
    <>
      <div className="posts-container space-y-5 relative">
      {homeReducer.isLoading &&
      <PostLoading/> }
        {homeReducer.values.posts.map((val, index) => {
            return <ImagePost post={val} key={index} />;
        })}
      </div>
    </>
    
  );
}

export default Posts;
