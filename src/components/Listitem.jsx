import React from 'react'
import { useDispatch } from 'react-redux'
import { edit, remove } from '../features/todos/todoSlice'

const Listitem = ({item}) => {

    const dispatch=useDispatch()

    const handleRemove=(id)=>{
        dispatch(remove(id))
    }
    const handleEdit=(item)=>{
        console.log(item)
       dispatch(edit(item))
    }
  return (
    <li className='flex bg-black justify-between items-center my-1 p-5'>
    <span>
      <h1 className='text-white'>id{item._id}</h1>
      <h1 className='text-white'>title {item.title}</h1>
      <h1 className='text-white'>description {item.description}</h1>
    </span>
    <span>
      <button onClick={()=>handleEdit(item)} className='p-2 rounded mx-1 text-white bg-green-700'>edit</button>
      <button onClick={()=>handleRemove(item._id)} className='p-2 rounded mx-1 text-white bg-red-700'>delete</button>
    </span>
  </li>
  )
}

export default Listitem