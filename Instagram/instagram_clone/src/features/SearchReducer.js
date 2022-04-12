import {createSlice} from '@reduxjs/toolkit'
const initState = {
    name:'search',
    values:{
        recentSearch:[],
        result:[]
    }
}
const SearchReducer = createSlice({
    name:'search',
    initialState:initState,
    reducers:{
        defaultAction:(state,action)=>{
            state = action.payload
        },
        setResult:(state,action)=>{
            state.values.result = action.payload
        }
    }
})
export const {defaultAction,setResult} = SearchReducer.actions
export default SearchReducer.reducer