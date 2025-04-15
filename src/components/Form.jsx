import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, edit, update } from '../features/todos/todoSlice'

const Form = () => {
 
    const dispatch=useDispatch()

    const {edit}=useSelector((state)=>state.todos)

    const [title,setTitle]=useState()
    const [description,setDescription]=useState()

    const handleSubmit=(e)=>{
       e.preventDefault()
       !edit.isEdit?
       dispatch(add({_id:crypto.randomUUID(),title,description})):dispatch(update({_id:edit.todo._id,title,description}))
       setTitle("")
       setDescription("")
 }

    useEffect(()=>{
        setTitle(edit.todo.title)   
        setDescription(edit.todo.description)
    },[edit])


  return (
    <form onSubmit={handleSubmit}>
        <input required onChange={(e)=>setTitle(e.target.value)} className='w-full my-1 p-2 border' value={title} type="text" />
        <input required onChange={(e)=>setDescription(e.target.value)} className='w-full my-1 p-2 border' value={description} type="text" />
        <button  className='w-full text-white  bg-green-800 p-2 font-bold'>Submit</button>
      </form>
  )
}

export default Form