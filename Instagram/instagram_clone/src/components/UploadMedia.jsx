import React, { useRef,useState,useEffect} from 'react'
import {useDropzone}  from 'react-dropzone' 
import MediaEditor from './MediaEditor'
import {useSelector,useDispatch} from 'react-redux'
import {setMedia,setControl,setTitle} from '../features/createPost'
function UploadMedia() {
    const inputFiles = useRef(null)
    const postReducer = useSelector(state=>state.createPoster)
    const handleBack = ()=>{
        if(postReducer.media !== null){
            if(window.confirm('Are you  sure?')){
                dispatch(setMedia(null))
                dispatch(setTitle('Create New Post'))
                dispatch(setControl('hidden-control'))
            }
        }
       
    }
    const dispatch = useDispatch()
    console.log(postReducer)
    return (
        <>
            <div className='w-full h-96 flex justify-center items-center flex-col space-y-6 cursor-pointer' onClick={()=>{
                inputFiles.current.click() 
            }}>

            <i className="fa-solid fa-images" style={{
            fontSize:90
            }}></i>
            <h2 className='text-lg font-light'>Select photos </h2>
            <input type="file" multiple={false} accept="image/*" className='hidden' ref={inputFiles} onChange={(e)=>{
                let selectedFile = e.target.files[0]
                if(selectedFile !== null && selectedFile !== undefined){
                    const render = new FileReader()
                    render.addEventListener('load',()=>{
                        dispatch(setMedia(render.result))
                    })
                    render.readAsDataURL(selectedFile)
                }
            }}/>
            </div> 
        </>
  )
}

export default UploadMedia