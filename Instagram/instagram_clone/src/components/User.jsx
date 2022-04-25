import React ,{useEffect,useState}from "react";
import {GetUserProfile} from '../API/UserProfileAPI';
import {useSelector,useDispatch} from 'react-redux'
import "../css/user.scss";
import Navbar from "./Navbar";
import UserHeader from "./UserHeader";
import UserTablist from "./UserTablist";
import {UpdatePost, UpdatePostAndUser, UpdateSaved,UpdateUser} from '../features/UserProfile'
import { useParams } from "react-router-dom";
import UserProfileLoading from "./UserProfileLoading";
export default function User() {
  const [currentPage,setCurrentPage] = useState(1);
  const DIR = useDispatch()
  const param = useParams()
  const userProfileReducer = useSelector((state)=>state.userProfileReducer)
  const [loading,setLoading] = useState(false)
  let userId = param.userId;
  let currentUserId = localStorage.getItem('instagram_user_id');
  useEffect(async() => {
    const  fetchUser = async ()=>{
        setLoading(true)
        let userProfile = await GetUserProfile(userId,currentUserId,currentPage);
        if(userProfile){
          return userProfile
        }
    }
    let profile =  await fetchUser();
    DIR(UpdatePostAndUser({posts:Object.values(profile.posts),user:profile.user}))
    setLoading(false)
  }, [userId])
  return (
    <>
      <Navbar />
      <section className="user">
      {loading && <UserProfileLoading/>}
      {!loading?
      <div className="container user__container">
        <UserHeader/>
        <UserTablist />
      </div>:""  
      }
      </section>
    </>
  );
}
