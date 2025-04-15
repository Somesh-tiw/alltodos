import React from 'react'
import { useSelector } from 'react-redux'
import Listitem from './Listitem'

const Listgroup = () => {

     const {allTodos}=useSelector((state)=>state.todos)
    
  return (
    <ul>
        {
            allTodos.map((item)=><Listitem key={item._id} item={item}/>)
        }
        
      </ul>
  )
}

export default Listgroup