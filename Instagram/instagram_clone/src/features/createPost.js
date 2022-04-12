import {createSlice} from '@reduxjs/toolkit'
const initState = {
    originMedia:null,
    cropMedia:null,
    title:'Create New Post',
    isHiddenControl : 'hidden-control',
    mediaInfo:{width:0,height:0,x:0,y:0},
    isCropped:false,
    containerStyle:{width:'w-96'},
    caption:''
}
const createPostReducer = createSlice({
    name:'createPost',
    initialState:initState,
    reducers:{
        setCaption:(state,action)=>{
            state.caption = action.payload
        },
        setMedia:(state,action)=>{
            state.originMedia = action.payload
        },
        setTitle:(state,action)=>{
            state.title = action.payload
        },
        setControl : (state,action)=>{
            state.isHiddenControl = action.payload
        },
        setMediaInfo:(state,action)=>{
            state.mediaInfo = action.payload
        },
        setCropMedia:(state,action)=>{
            state.cropMedia = action.payload
        },
        setCropped:(state,action)=>{
            state.isCropped = action.payload
        },
        setContainerStyle:(state,action)=>{
            state.containerStyle = action.payload
        },
        clearState:(state)=>{
            state.originMedia = initState.originMedia
            state.caption = initState.caption
            state.containerStyle = initState.containerStyle
            state.cropMedia = initState.cropMedia
            state.isCropped = initState.isCropped
            state.mediaInfo = initState.mediaInfo
            state.title = initState.title
            state.isHiddenControl = initState.isHiddenControl 
        }
    }
})
export default createPostReducer.reducer
export const {setMedia,setControl,setMediaInfo,setTitle,setCropMedia,setCropped,setContainerStyle,setCaption,clearState} = createPostReducer.actions