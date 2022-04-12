import React from 'react'
import '../css/loading.css'
function Loading() {
  return (
      <div className='w-screen h-screen top-0 left-0 fixed' style={{
          backgroundColor:'rgba(0,0,0,0.4)'
      }}>
          <div className='spinner-container'>
              <span className='spinner'></span>
          </div>
      </div>
  )
}

export default Loading