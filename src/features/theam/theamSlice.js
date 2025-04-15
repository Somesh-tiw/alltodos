import { createSlice } from "@reduxjs/toolkit";

const existingTheam=JSON.parse(localStorage.getItem('theam'))
const theamSlice=createSlice({
    name:"theam",
    initialState:{
       dark:existingTheam
    },
    reducers:{
        changeTheam:(state,action)=>{
            return{
                ...state,
                dark:state.dark?false:true
            }
        }
    }
})
export const {changeTheam} =theamSlice.actions
export default theamSlice.reducer