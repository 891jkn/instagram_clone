import {createSlice} from '@reduxjs/toolkit'
import { updatePosts } from './HomeReducer';
const initState = {
    values:{
        posts:[],
        postCount:0,
        user:{haveFriend:false},
        tagged:[],
        saved:[],
   }
}
const userProfileReducer = createSlice({
    name:'userReducer',
    initialState:initState,
    reducers:{
        UpdatePost:(state,action)=>{
            state.values.posts = action.payload;
        },
        UpdateUserProfile :(state,action)=>{
            state.values.user = action.payload;
        },
        UpdateTagged : (state,action)=>{
            state.values.tagged = action.payload;
        },
        UpdateSaved:(state,action)=>{
            state.values.saved = action.payload;
        },
        UpdatePostAndUser:(state,action)=>{
            let new_payload = {...action.payload}
            state.values.posts = new_payload.posts
            state.values.user = {...initState,...new_payload.user}
            state.values.postCount = new_payload.postCount
        },
        UpdatePostAndPostCount:(state,action)=>{
            let new_payload = {...action.payload}
            state.values.posts = new_payload.posts
            state.values.postCount = new_payload.postCount
        },
        clearProfile:(state,action)=>{
            let new_payload = {...action.payload}
            state.values.user = new_payload.user
            state.values.posts = new_payload.posts
        }

    }
})
export const {UpdatePost,UpdateSaved,UpdateUserProfile,UpdateTagged,UpdatePostAndUser,clearProfile,UpdatePostAndPostCount} = userProfileReducer.actions
export default userProfileReducer.reducer