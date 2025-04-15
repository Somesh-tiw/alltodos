import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Listgroup from './components/Listgroup'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {

  const {dark}=useSelector((state)=>state.theam)

  return (
    <div className={dark?"min-h-screen bg-gray-600":'min-h-screen bg-white'}>
      <Navbar/>
      <Form/>
      <Listgroup/> 
    </div>
  )
}

export default App