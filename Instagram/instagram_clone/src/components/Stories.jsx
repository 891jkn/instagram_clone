import React from 'react'
import {useState} from 'react'
import defaultStoriesImg from '../images/user.png'
import '../css/story.css'
const Story = ({story})=>{
    let defaultUserName = 'dangduykhanh'
    return(
        <>
        <div className='w-fit h-fit space-y-2'>
            <img src={story.userAvatar?story.userAvatar:defaultStoriesImg} className='h-14 m-auto rounded-full  border-custom'/>
            <p className='text-xs'>{story.user.username?story.user.username:defaultUserName}</p>
        </div>
        </>
    )
}
function Stories() {
    const [listShortNews,setListShortNew] = useState([{user:{},story:{}},{user:{},story:{}}])
    return (
        <>
            <div className='w-full h-fit flex flex-row space-x-4 py-5 bg-white px-4 border'>
                {listShortNews.map((val,index)=>{
                    return  <Story story={val} key={index}/>
                })}
            </div>
        </>

  )
}

export default Stories