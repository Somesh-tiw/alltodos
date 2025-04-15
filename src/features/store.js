import { configureStore } from "@reduxjs/toolkit";
import todos from "./todos/todoSlice"
import theam from "./theam/theamSlice"

const store=configureStore({
    reducer:{
        todos,theam
    }
})

export default store