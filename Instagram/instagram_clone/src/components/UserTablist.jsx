import { Outlet, Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function UserTablist() {
  const userProfileReducer = useSelector((state)=>state.userProfileReducer)
  let posts = userProfileReducer.values.posts || []
  let param = useParams()
  let userId = param.userId;
  const TabData = ({item})=>{
    return (
      <div className="user__item">
      <img src={item.media} alt="" className="z-0" />
      <div className="user__overlay  bg-black opacity-60">
        <div className="user__icon flex justify-center items-center">
          <div className="  user__icon-heart">
            <i className="fa-solid fa-heart"></i> &nbsp;
            {item.likeCount}
          </div>
          <div className="  user__icon-comment">
            <i className="fa-solid fa-comment"></i> &nbsp;
            {item.commentCount}
          </div>
        </div>
      </div>
    </div>
    )
  }
  return (
    <main className="user__post">
      <div className="user__tablist flex items-center justify-center">
        <Link to={`/user/${userId}`} className="user__tablist-icon">
          {" "}
          <i className="fa-solid fa-table-cells"></i>
          <p className="user__tablist-title">POST</p>
        </Link>
        <Link to="/user/saved" className="user__tablist-icon ">
          <i className="fa-regular fa-bookmark"></i>{" "}
          <p className="user__tablist-title">save</p>
        </Link>
        <Link to="/user/tagged" className="user__tablist-icon">
          <i className="fa-regular fa-address-book"></i>
          <p className="user__tablist-title">TAGGED</p>
        </Link>
      </div>
      <div className="user__preview ">
        {posts.map((item,key) => {
          return <TabData item={item} key={key}/>
        })}
      </div>
    </main>
  );
}
