import React,{useEffect, useRef} from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import {useState} from 'react'
import "../css/navbar.css";
import UploadMedia from './UploadMedia'
import CreatePost from "./CreatePost";
import logo from "../images/logo.png";
import SearchResult from "./SearchResult";
import { useSelector ,useDispatch}from "react-redux";
import { SearchAPI } from "../API/SearchAPI";
import {setResult} from '../features/SearchReducer'
const Navbar =  ()=>{
  const navItems = [
    {id:1,content:'fa-house',to:'/',handleClick:function(){setActive(1)}},
    {id:2,content:'fa-comment-dots',to:'',handleClick:function(){setActive(2)}},
    {id:3,content:'fa-square-plus',to:'',handleClick:function(){setActive(3);setOpenCreatePost(true)}},
    {id:4,content:'fa-compass',to:'',handleClick:function(){setActive(4)}},
    {id:5,content:'fa-heart',to:'',handleClick:function(){setActive(5)}},
    {id:6,content:'fa-circle-user',to:`/user/${window.localStorage.getItem('instagram_user_id')}`,handleClick:function(){setActive(6)}}
  ]
  const NavLink = ({to,isActive,content,handleClick})=>{
    return (
      <Link to={to}>
        <i onClick={handleClick} className={isActive?`fa-solid  ${content}`:`fa-regular ${content}`}></i>
      </Link>
    )
  }
  const [active,setActive] = useState(1)
  const [createPost,setOpenCreatePost] =  useState(false)
  const [searchActive,setSearchActive] = useState(false)
  const nav = useNavigate()
  const ref = useRef()
  const DIR = useDispatch()
  const handleOpenToastResult = ()=>{
    if(!searchActive){
      setSearchActive(true)
    }
  }
  const handleCloseSearch  = (e)=>{
    if(searchActive && ref.current && !ref.current.contains(e.target)){
      setSearchActive(false)
    }
  }
  const handleSearch = async(e)=>{
    let key = e.target.value
    if(key.trim()!==''){
      const result = await SearchAPI(key)
      if(result.data){
        DIR(setResult(result.data))
      }
    }else{
      DIR(setResult([]))
    }
  }
  useEffect(()=>{

  },[active])
  document.addEventListener('click',handleCloseSearch)
  return (
    <>
      { createPost && <CreatePost closeModel={setOpenCreatePost}/>}
      <div className="navbar sticky top-0 z-30">
        <div className="container navbar-container mx-auto">
          <div className="flex flex-row py-3 w-full items-center">
            <a className="navbar-brand flex-auto" onClick={()=>{
                nav('/')
            }}>
              <img src={logo} className="logo md:mr-auto" />
            </a>
            <div className="flex-auto sm:hidden md:block lg:block px-2" ref={ref}>
              <form className="ui-search-form ml-auto lg:w-5/6 md:w-full" onSubmit={e=>e.preventDefault()}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input onFocus={handleOpenToastResult}
                  className="ui-input w-3/4 "
                  placeholder="Search"
                  onChange={handleSearch}
                />
              </form>
              <div className="relative" >
                  {searchActive && <SearchResult/>}
              </div>
            </div>
            <div className="navbar-navigate flex-auto">
              <div className="flex space-x-6 justify-end">
                {navItems.map((val,key)=>{
                  return <NavLink to={val.to} isActive={val.id == active} content ={val.content} handleClick={val.handleClick} key={key}/>
                })}
                {/* <Link to="/">
                  <i className="fa-solid fa-house"></i>
                </Link>
                <Link to="/">
                  <i className="fa-regular fa-comment-dots"></i>
                </Link>
                  <i className="fa-regular fa-square-plus" onClick={()=>{setOpenCreatePost(true)}}></i>
                <Link to="/">
                  <i className="fa-regular fa-compass"></i>
                </Link>
                <Link to="/">
                  <i className="fa-regular fa-heart"></i>
                </Link>
                <Link to={`/user/${window.localStorage.getItem('instagram_user_id')}`}>
                  <i className="fa-regular fa-circle-user"></i>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
    )
}

export default Navbar;
