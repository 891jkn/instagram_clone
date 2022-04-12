import React ,{useEffect}from 'react'
import defaultUserAvatar from '../images/user.png'
import {useSelector,useDispatch} from 'react-redux'
import {setTitle,setControl,setMedia,setContainerStyle,setCaption} from '../features/createPost'
function CaptionEditor() {
    const postReducer  = useSelector((state)=>state.createPoster)
    const DIR = useDispatch()
    useEffect(() => {
        DIR(setTitle('Create New Post'))
        DIR(setControl(''))
        DIR(setContainerStyle({width:'w-3/5'}))
    }, [])
    
  return (
      <>
        <div className='w-full h-fit'>
            <div className='flex flex-row space-x-4'>
                <div className='basis-3/5 ' style={{
                    backgroundImage:`url(${postReducer.cropMedia})`,
                    backgroundSize:'cover',
                    backgroundPosition:'center',
                    backgroundRepeat:'no-repeat',
                    maxHeight:'442px',
                    minHeight:'442px'
                }}></div>
                <div className='basis-2/5 mx-0 px-2' style={{
                    margin:'0'
                }}>
                    <div className = 'flex flex-row py-5 items-center space-x-2'>
                        <img src={defaultUserAvatar} className='w-8'/>
                        <strong className='font-semibold text-sm'>Khanhkd</strong>
                    </div>
                    <div className='w-100 h-fit'>
                        <textarea className='px-1 py-2 font-semibold text-sm ' placeholder='Write Caption  ...' autoComplete='off' autoCorrect='off' autoFocus='on' style={{
                            minWidth:'100%',
                            minHeight:'286px',
                            border:'none',
                            outline:'none',
                            resize:'none'
                        }} onChange = {(e)=>{
                            console.log(e.target.value)
                            DIR(setCaption(e.target.value))
                        }}></textarea>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}

export default CaptionEditor