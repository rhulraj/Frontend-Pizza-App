import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Signup from './Pages/Auth/Signup'
import Login from './Pages/Auth/Login'
import NotFound from './Pages/NotFound'
import Denied from './Pages/Auth/Denied'
import AddProduct from './Pages/Admin/AddProduct'

function App() {

  return (
   <>
    <Routes >
      <Route path='/' element ={<Home />} />
      <Route path='/denied' element = {<Denied />} />
      <Route path='/auth/signup' element ={<Signup />} />
      <Route path='/login' element ={<Login />} />
      <Route path='*' element ={<NotFound />} />
      <Route path='/admin/addproduct' element= {<AddProduct />} />
    </Routes>
    
   </>
  )
}

export default App
