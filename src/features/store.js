import { configureStore } from "@reduxjs/toolkit";
import todos from "./todos/todoSlice"

const store=configureStore({
    reducer:{
        todos,
    }
})

export default store