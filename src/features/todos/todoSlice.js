import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todos",
    initialState:{
        allTodos:[{
            _id:1,
            title:"I am Title",
            description:"I am Description"
        }],
        edit:{todo:{},isEdit:false}
    },
     reducers :{
        add:(state,action)=>{
            return{
                ...state,
                allTodos:[action.payload,...state.allTodos]
            }

        },
        remove:(state,action)=>{
            return{
                ...state,
                allTodos:state.allTodos.filter((item)=>item._id!==action.payload)
            }

        },
        edit:(state,action)=>{
            return{
                ...state,
                edit:{todo:action.payload,isEdit:true}
            }

        } ,
        update:(state,action)=>{
            return{
                ...state,
                  allTodos:state.allTodos.map((item)=>item._id===action.payload._id?action.payload:item),
                  edit: {todo:{},isEdit:false}
            }
             
    }
       
}
})
export const {add,remove,edit,update}=todoSlice.actions
export default todoSlice.reducer