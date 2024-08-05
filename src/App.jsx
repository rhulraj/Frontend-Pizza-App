import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Signup from './Pages/Auth/Signup'
import Login from './Pages/Auth/Login'

function App() {

  return (
   <>
    <Routes >
      <Route path='/' element ={<Home />} />
      <Route path='/auth/signup' element ={<Signup />} />
      <Route path='/login' element ={<Login />} />
    </Routes>
    
   </>
  )
}

export default App
