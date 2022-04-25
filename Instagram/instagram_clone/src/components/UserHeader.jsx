import { useSelector } from "react-redux";
import avatar from "../images/user.png";
import React,{useState,useEffect} from "react";
import { Follow, UnFollow } from '../API/UserProfileAPI'
export default function UserHeader() {
  const userProfileReducer = useSelector((state)=>state.userProfileReducer)
  let user = userProfileReducer.values.user
  let postCounts = userProfileReducer.values.posts.length || 0
  const [isFollowed,setIsFollowed] = useState(userProfileReducer.values.user.haveFriend)
  useEffect(() => {
    setIsFollowed(userProfileReducer.values.user.haveFriend)
  }, [userProfileReducer.values.user])
  const handleSetFollow = ()=>{
    isFollowed ? setIsFollowed(false) : setIsFollowed(true)
    isFollowed ? handleUnFollow() : handleFollow()
  }
  const handleFollow = async()=>{
    await Follow(localStorage.getItem('instagram_user_id'),userProfileReducer.values.user.id);
  }
  const handleUnFollow = async()=>{
    await UnFollow(localStorage.getItem('instagram_user_id'),userProfileReducer.values.user.id);
  }
  return (

    <>
       {user !== null 
        ?
        <header className="user__header  ">
          <div className="user__avatar">
            <img src={user.avatar || avatar} alt="avatar" />
          </div>
          <div className="user__info">
            <div className="flex mb-5 space-x-6 justify-start items-center">
              <h1 className="user__name">{user.user_name}</h1>
              <div className="options-tab">
                {userProfileReducer.values.user.id !== localStorage.getItem('instagram_user_id') ?
                  <button onClick={handleSetFollow} className="bg-sky-500 font-semibold border text-white px-6 py-1 rounded-sm">{isFollowed ? "UnFollow":"Follow"}</button>
                  :
                  <button className="bg-white font-semibold border border-gray-500 text-black px-6 py-1 rounded-sm">Edit Profile</button>
                }
              </div>
            </div>
            <div className=" flex mb-5 gap-6">
              <div className="user__post">
                <strong>{postCounts}</strong> Posts
              </div>
              <div className="user__following">
                <strong>{user.follower}</strong> Follower
              </div>
              <div className="user__following">
                <strong>{user.following}</strong> Following
              </div>
            </div>
            <div className="user__description">
              {user.slogan || user.user_name}
            </div>
           
          </div>
         
        </header>
      :
      <header className="user__header  ">
        <div className="user__avatar">
          <img src={ avatar} alt="avatar" />
        </div>
        <div className="user__info">
          <div className="flex mb-5 ">
            <h1 className="user__name">{"Default"}</h1>
          </div>
          <div className=" flex mb-5 gap-6">
            <div className="user__post">
              <strong>{0}</strong> Posts
            </div>
            <div className="user__following">
              <strong>{0}</strong> Friends
            </div>
          </div>
          <div className="user__description">
            {"default"}
          </div>
        </div>
      </header>
      }
    </>
  );
}
