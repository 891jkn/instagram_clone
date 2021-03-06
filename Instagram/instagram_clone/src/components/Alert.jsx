import React from 'react'
import {useEffect} from 'react'
function Alert({content,custom }) {
    useEffect(() => {
        custom = {
            background : 'pink-500',
            color:'white'
        }
    })
    
    return (
    <>
        <div className={`text-${custom.color} px-6 py-4 border-0 rounded relative mb-4 bg-${custom.background}`}>
            <span className="text-xl inline-block mr-5 align-middle">
               <i class="fa-solid fa-bell"></i>
            </span>
            <span className="inline-block align-middle mr-8">
                <b className="capitalize">{content}</b>
            </span>
            <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
                <span>×</span>
            </button>
        </div>
    </>
    )
}

export default Alert