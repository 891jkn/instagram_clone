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
import PureLoading from "./PureLoading";
import PaginatePostLoading from "./PaginatePostLoading";

function Posts({fetching,nothing}) {
  const homeReducer = useSelector((state)=>state.homeReducer)
  // const DIR = useDispatch()
  return (
    <>
      <div className="posts-container space-y-5 relative">
      {homeReducer.values.isLoading &&
      <PureLoading/> }
        {homeReducer.values.posts.map((val, index) => {
            return <ImagePost post={val} key={index} />;
        })}
      {fetching && <PaginatePostLoading/>}
      {nothing? <h5 className="text-center font-semibold text-gray-400">No thing to load</h5> : ""}
      </div>
    </>
    
  );
}

export default Posts;
