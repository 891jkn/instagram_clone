import React, { useRef,useState,useEffect } from 'react'
import UploadMedia from './UploadMedia'
import {useSelector,useDispatch} from 'react-redux'
import {setCropMedia, setCropped, setContainerStyle, clearState } from '../features/createPost'
import MediaEditor from './MediaEditor'
import CaptionEditor from './CaptionEditor'
import {createPostAPI} from '../API/PostAPI'
import { setUpdate } from '../features/HomeReducer'
function CreatePost({closeModel}) {
    const postReducer = useSelector((state)=>state.createPoster)
    const homeReducer = useSelector((state)=>state.homeReducer)
    const [loading,setShowLoading] = useState(false)
    const DIR = useDispatch()
    const Canvas = useRef(null)
    const [canvasStyle,setCanvasStyle] = useState(null)
    useEffect(() => {
        setCanvasStyle({
            width:`${Math.floor(postReducer.mediaInfo.width)}px`,
            height:`${Math.floor(postReducer.mediaInfo.height)}px`,
        })
        DIR(setContainerStyle({width:'w-96'}))
    }, [postReducer.mediaInfo])
    
    const handleClose = ()=>{
        if(postReducer.originMedia !== null){
            if(window.confirm('Are you sure ?')){
                closeModel(false)
                DIR(clearState())
            }
        }else{
            closeModel(false)
        }
    }
    const handleBack = ()=>{
        if(postReducer.originMedia !== null){
            if(window.confirm('Are you  sure?')){
                DIR(clearState())
            }
        }
    }
    const handleCrop = ()=>{
        const ctx  = Canvas.current.getContext('2d')
        const image = new Image()
        image.src = postReducer.originMedia
        ctx.save()
        ctx.drawImage(image,postReducer.mediaInfo.x,postReducer.mediaInfo.y,postReducer.mediaInfo.width,postReducer.mediaInfo.height,0,0,postReducer.mediaInfo.width,postReducer.mediaInfo.height)
        ctx.restore()
        DIR(setCropMedia(Canvas.current.toDataURL()))
        setCanvasStyle({width:`${postReducer.mediaInfo.width}px`,height:`${postReducer.mediaInfo.height}px`})
        DIR(setCropped(true))
    }   
    const handleCreate = async()=>{
        setShowLoading(true)
        setTimeout(async()=>{
            const newPost = {
                caption:postReducer.caption?postReducer.caption:'No Cap',
                media:postReducer.originMedia,
                userId:localStorage.getItem('instagram_user_id')
            }   
            const result = await createPostAPI(newPost)
            if(result.result){
                DIR(clearState())
                DIR(setUpdate(homeReducer.isUpdate?false:true))
                closeModel(false)
                setShowLoading(false)
            }
        },100)
        
    }
    return(
        <>
            <div className={`w-screen h-screen fixed top-0 z-50`} style={{
                background:'rgba(0,0,0,0.85)'
            }} >
                <canvas ref={Canvas} className='hidden' style = {canvasStyle}></canvas>
                <span className='text-white fixed text-2xl opacity-100 right-10 top-6 cursor-pointer fa-solid fa-xmark' onClick={handleClose}>
                </span>
                <div  className={`transition ease-in-out delay-150  ${postReducer.containerStyle.width} rounded h-fit bg-white fixed top-1/2 left-1/2 `} style={{
                transform:'translate(-50%,-50%)',
                opacity:1
            }}>
                <div className="w-full p-3 border-b border-b-gray-400 flex justify-between items-center">
                    <i className={`fa-solid fa-arrow-left ${postReducer.isHiddenControl} cursor-pointer`} onClick={handleBack}></i>
                    <h1 className='text-md text-gray-700 text-center opacity-100 font-semibold m-auto'>{postReducer.title}</h1>
                    <i className={`fa-solid fa-arrow-right ${postReducer.isHiddenControl} cursor-pointer` } onClick = {postReducer.cropMedia ==  null ? handleCrop : handleCreate}></i>
                </div>
                <div className='w-full h-fit'>
                        {(postReducer.originMedia == null) ? <UploadMedia/> : postReducer.isCropped == false ? <MediaEditor/> : <CaptionEditor/> }
                </div>
                {/* neu co anh se chuyen sang tab edit */}
             
            </div>
        </div>
        </>
        
    )
  
}

export default CreatePost