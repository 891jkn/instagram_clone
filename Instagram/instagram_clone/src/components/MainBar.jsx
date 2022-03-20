import React from 'react'
import Posts from './Posts'
import Stories from './Stories'
import '../css/main_bar.css'
function MainBar() {
  return (
    <>
    <div className='main-bar'>
        <div className='space-y-5 content'>
            <Stories/>
            <Posts/>
        </div>
    </div>
       
    </>
  )
}

export default MainBar