import {createSlice} from '@reduxjs/toolkit'
const initState = {
   values:{
       posts:[],
       user:null,
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
            state.isUpdate = action.payload
        },
        setLoading:(state,action)=>{
            state.isLoading = action.payload
        },
        clearState:(state)=>{
            state.values = initState.values
        }
    }
})
export const {defaultAction,updatePosts,updateUser,setUpdate,setLoading,clearState} = homeReducer.actions
export default homeReducer.reducer