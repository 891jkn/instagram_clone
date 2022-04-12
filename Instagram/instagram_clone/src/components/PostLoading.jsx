import React from 'react'
import '../css/loading.css'
function PostLoading() {
    const spinnerStyle = {
        width:'20px',
        height:'20px',
        borderRadius:'50%',
        borderTop:'2px solid gray',
        animation:'spinner 1s infinite',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)'

    }
  return (
    <>
        <div className='fixed left-1/2 top-0 mt-1 spinner' style={spinnerStyle}>

        </div>
    </>
  )
}

export default PostLoading