import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheam } from '../features/theam/theamSlice'

const Navbar = () => {

  const {dark}=useSelector((state)=>state.theam)

  const dispatch=useDispatch()

  const handleTheamChange=()=>{
    localStorage.setItem("theam",JSON.stringify(dark?false:true))
    dispatch(changeTheam())
  }
  return (
    <nav className={dark?'p-5 bg-gray-600 flex justify-between items-center':"p-5 bg-white flex justify-between items-center"}>
        <h1 className={dark?'text-white text-2xl font-bold':'text-black text-2xl font-bold'}>TodoApp</h1>
         <button onClick={handleTheamChange} className='bg-black p-2 rounded text-white font-bold'>{dark?"Dark Mood":"Light Mood"}</button>
      </nav>
  )
}

export default Navbar