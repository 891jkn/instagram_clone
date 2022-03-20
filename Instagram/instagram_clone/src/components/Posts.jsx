import React from 'react'
import user from '../images/user.png'
import {useState} from 'react'
import defaultImagePost from '../images/post_images/vivian_3_15_2020.jpg'
import '../css/posts.css'
import InfoToast from './ToastInfo'
const ImagePost = (post)=>{
  const [isTruncate,setIsTruncate] =useState(true);
  const [infoToast,setInfoToast] = useState(<InfoToast userId={1} hidden='hidden'/>)
  const countComment = undefined
  return(
    <div className='post border bg-white'>
      {/* post header */}
        <div className='py-3 bg-white px-4 space-x-3 flex flex-row  justify-between items-center'>
          <div className='space-x-3'>
            <img src={user} className='h-9 rounded-full inline cursor-pointer'/>
            <a className='text-sm font-semibold cursor-pointer relative' onMouseEnter={()=>{
              setTimeout(()=>{
                setInfoToast(<InfoToast userId={1} hidden=' '/>)
              },1000)
            }} onMouseLeave={()=>{
              setInfoToast(<InfoToast userId={1} hidden='hidden'/>)
            }}>missingvivian {infoToast}</a>
          </div>
          <div>
          <i className="fa-solid fa-ellipsis cursor-pointer"></i>
          </div>
        </div>
        {/* post image */}
        <div>
          <img src={post.image?post.image:defaultImagePost} alt="image_post" />
        </div>
        {/* post action */}
        <div className='py-5'>
          {/* post action icon */}
          <div className='flex flex-row  px-4 justify-between'>
              <div className='space-x-4'>
                <i className="fa-regular text-2xl fa-heart cursor-pointer hover:text-gray-500"></i>
                <i className="fa-regular text-2xl fa-comment cursor-pointer hover:text-gray-500"></i>
                <i className="fa-solid text-2xl fa-share cursor-pointer hover:text-gray-500"></i>
              </div>
              <div>
                <i className="fa-regular text-2xl fa-bookmark  cursor-pointer hover:text-gray-500"></i>
              </div>
          </div>
            {/* post Info */}
            <div className='px-4 pt-2 pb-0'>
              <a className='text-sm font-semibold'>{post.likes||1000} likes</a>
              <div className='w-1/2'>
              <p className={`w-2/3 text-sm ${isTruncate?'truncate ':''}`}>{post.title||'lorem ipsum scsaksaklnalksnsacsabckasnckn'}</p>
              <a className={`text-sm text-gray-400 ${isTruncate?'inline':'hidden'} cursor-pointer`} onClick={()=>{
                  setIsTruncate(isTruncate?false:true)
                }}>more</a>
              </div>
              <div>
                <a className='text-sm text-gray-400 cursor-pointer'>View All {countComment||245} Comments</a>
                {/* comments */}
                <div className='flex flex-row justify-between items-center py-0'>
                  <p className='text-sm w-1/3 font-semibold truncate block cursor-pointer ' href='#'> <a className='hover-decoration'>{post.user||'missingvivian'}</a> {post.comment||'<3<3<3<3'} </p>
                  <i className="fa-regular text-xs fa-heart cursor-pointer ml-auto"></i>
                </div>
                <div className='flex flex-row justify-between items-center py-0'>
                  <p className='text-sm w-1/3 font-semibold truncate block cursor-pointer ' href='#'> <a className='hover-decoration'>{post.user||'missingvivian'}</a> {post.comment||'<3<3<3<3'} </p>
                  <i className="fa-regular text-xs fa-heart cursor-pointer ml-auto"></i>
                </div>
                <div className='flex flex-row justify-between items-center py-0'>
                  <p className='text-sm w-1/3 font-semibold truncate block cursor-pointer ' href='#'> <a className='hover-decoration'>{post.user||'missingvivian'}</a> {post.comment||'<3<3<3<3'} </p>
                  <i className="fa-regular text-xs fa-heart cursor-pointer ml-auto"></i>
                </div>
                {/* time */}
                <p className='text-gray-400 text-time uppercase	mb-0'>{post.date||'march 12'}</p>
              </div>
            </div>

        </div>
        {/* comment */}
        <div className='px-3 border-t py-3'>
          <form className='flex flex-row justify-between items-center space-x-3'>
            <i className="fa-regular fa-xl fa-face-smile cursor-pointer"></i>
            <input className='w-full text-sm text-gray-400  py-1 pl-2 comment-input' placeholder='Typing some thing'/>
            <a className='text-sm font-semibold text-sky-500 cursor-pointer'>Post</a>
          </form>
        </div>
      </div>
  )
}
function Posts() {
  const posts = [{},{},{},{}]
  return (
    <>
      <div className='posts-container space-y-5'>
        {posts.map((val,index)=>{
          return (<ImagePost post={val} key={index}/>)
        })}
      </div>
    </>
  )
}

export default Posts