import React, {useEffect, useState} from "react";
import {GetUserProfile} from '../API/UserProfileAPI';
import {useSelector, useDispatch} from 'react-redux'
import "../css/user.scss";
import Navbar from "./Navbar";
import UserHeader from "./UserHeader";
import UserTablist from "./UserTablist";
import {
    clearProfile,
    UpdatePostAndPostCount,
    UpdateUserProfile
} from '../features/UserProfile'
import {useParams} from "react-router-dom";
import UserProfileLoading from "./UserProfileLoading";
import {updateUser} from "../features/HomeReducer";

export default function User() {
    const [currentPage, setCurrentPage] = useState(1);
    const DIR = useDispatch()
    const param = useParams()
    const userProfileReducer = useSelector((state) => state.userProfileReducer)
    const [loading, setLoading] = useState(false)
    let userId = param.userId;
    let currentUserId = localStorage.getItem('instagram_user_id');
    const fetchUser = async () => {
        setLoading(true)
        let userProfile = await GetUserProfile(userId, currentUserId, currentPage);
        if (userProfile) {
            return userProfile
        }
    }

    const handleLoadDataPage = async()=>{
        setCurrentPage(c=>c+1)
    }

    // fetch user and update to store
    useEffect(async()=>{
        // user
        DIR(clearProfile({user:{},posts:[]}))
        let profile = await fetchUser()
        DIR(UpdateUserProfile(profile.user))

        // posts


        let fetchedPost = Object.values(profile.posts)
        let hasPost = []
        if (fetchedPost && fetchedPost.length > 0){

            if (hasPost && hasPost.length > 0){
                for (let i = 0 ; i < fetchedPost.length ; i++){
                    for (let j = 0 ; j < hasPost.length ; j ++){
                        if (fetchedPost[i].id !== hasPost[j].id){
                            hasPost.push(fetchedPost[i])
                            break
                        }
                    }
                }
            }else {
                for (let i = 0 ; i < fetchedPost.length ; i++){
                    hasPost.push(fetchedPost[i])
                }
            }
        }else {
            alert("Something err")
        }
        DIR(UpdatePostAndPostCount({posts:hasPost,postCount:profile.postCount}))
        setLoading(false)
    },[userId,currentPage])
    return (
        <>
            {console.log('re-ren')}
            <Navbar/>
            <section className="user">
                {loading && <UserProfileLoading/>}
                {!loading ?
                    <div className="container user__container text-center">
                        <UserHeader/>
                        <UserTablist/>
                        {(currentPage * 6) < userProfileReducer.values.postCount ?
                            <button onClick={handleLoadDataPage} className={'text-black font-semibold bg-white border border-black text-xs px-4 py-1 rounded my-2'}>Read More</button>
                            :""
                        }
                    </div> : ""
                }
            </section>
        </>
    );
}
