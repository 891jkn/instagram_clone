import {createSlice} from '@reduxjs/toolkit'
const initState = {
   values:{
       posts:[],
       user:{
           user_name:'default',
           nickname:'default'
       },
        isUpdate:false,
        isLoading:false
   }
}
const homeReducer = createSlice({
    name:'homeReducer',
    initialState:initState,
    reducers:{
        defaultAction:(state,action)=>{
            state = action.payload
        },
        updatePosts:(state,action)=>{
            state.values.posts = action.payload
        },
        updateUser:(state,action)=>{
            state.values.user = action.payload
        },
        setUpdate :(state,action)=>{
            state.values.isUpdate = action.payload
        },
        setLoading:(state,action)=>{
            state.values.isLoading = action.payload
        },
        clearState:(state)=>{
            state.values = initState.values
        },
        clearStateAndShowLoading:(state,action)=>{
            let new_payload = {...action.payload}
            let new_init = {...initState.values}
            state.values = new_init;
            state.values.isLoading = new_payload.isLoading
        },
        updateUserAndPostAndHideLoading:(state,action)=>{
            let new_payload = {...action.payload}
            state.values.posts = new_payload.posts
            state.values.user = new_payload.user
            state.values.isLoading = new_payload.isLoading
            state.values.isUpdate = new_payload.isUpdate
        },
        updatePostsAndIsUpdate:(state,action)=>{
            let new_payload = {...action.payload}
            state.values.posts = new_payload.posts
            state.values.isUpdate = new_payload.isUpdate            
        }
    }
})
export const {defaultAction,updatePosts,updateUser,setUpdate,setLoading,clearState,clearStateAndShowLoading,updateUserAndPostAndHideLoading,updatePostsAndIsUpdate} = homeReducer.actions
export default homeReducer.reducer