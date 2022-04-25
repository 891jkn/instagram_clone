import {createSlice} from '@reduxjs/toolkit'
import { updatePosts } from './HomeReducer';
const initState = {
   values:{
      posts:[],
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
        UpdateUser :(state,action)=>{
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
        },

    }
})
export const {UpdatePost,UpdateSaved,UpdateUser,UpdateTagged,UpdatePostAndUser} = userProfileReducer.actions
export default userProfileReducer.reducer