import React,{useEffect,useState,useRef} from 'react'
import '../css/edit_media.css'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/src/ReactCrop.scss'
import {useDispatch,useSelector} from 'react-redux'
import {setControl,setTitle,setMediaInfo} from '../features/createPost'
function MediaEditor() {
    const DIR = useDispatch()
    const postCreate = useSelector(state=>state.createPoster)
    const CropContainer = useRef(null)
    const handleCrop = (crop)=>{
        setCrop(crop)
    }
    const handleComplete = (crop)=>{
        console.log(crop)
        DIR(setMediaInfo(crop))
    }
    const [crop, setCrop] = useState()
    useEffect(() => {
        DIR(setTitle('Crop'))
        DIR(setControl(' '))
        DIR(setMediaInfo({
            width:CropContainer.current.offsetHeight,
            height:CropContainer.current.offsetWidth,
            x:0,
            y:0
        }))

    }, [])
    return (
        <>
            <ReactCrop  crop={crop}  aspect={1/1} onChange={handleCrop} onComplete = {handleComplete}>
                <img ref={CropContainer} src={postCreate.originMedia}/>
            </ReactCrop>
        </>
        
    )
}

export default MediaEditor