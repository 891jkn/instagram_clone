import {createSlice} from '@reduxjs/toolkit'
const initState = {
    name:'default',
    value:[]
}
const defaultReducer = createSlice({
    name:'default',
    initialState:initState,
    reducers:{
        defaultAction:(state,action)=>{
            state = action.payload
        }
    }
})
export const {defaultAction} = defaultReducer.actions
export default defaultReducer.reducer