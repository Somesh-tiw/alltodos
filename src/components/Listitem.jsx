import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { edit, remove } from '../features/todos/todoSlice'

const Listitem = ({item}) => {

    const dispatch=useDispatch()
    const {dark}=useSelector((state)=>state.theam)

    const handleRemove=(id)=>{
        dispatch(remove(id))
    }
    const handleEdit=(item)=>{
        console.log(item)
       dispatch(edit(item))
    }
  return (
    <li className={dark?"flex bg-gray-600 border justify-between items-center my-1 p-5":"flex bg-white justify-between items-center my-1 p-5"}>
    <span>
      <h1 className={dark?'text-white':'text-black'}>id{item._id}</h1>
      <h1 className={dark?'text-white':'text-black'}>title {item.title}</h1>
      <h1 className={dark?'text-white':'text-black'}>description {item.description}</h1>
    </span>
    <span>
      <button onClick={()=>handleEdit(item)} className='p-2 rounded mx-1 text-white bg-green-700'>edit</button>
      <button onClick={()=>handleRemove(item._id)} className='p-2 rounded mx-1 text-white bg-red-700'>delete</button>
    </span>
  </li>
  )
}

export default Listitem