import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Signup from './Pages/Auth/Signup'
import Login from './Pages/Auth/Login'
import NotFound from './Pages/NotFound'
import Denied from './Pages/Auth/Denied'
import AddProduct from './Pages/Admin/AddProduct'
import ProductDetails from './Pages/Products/ProductDetails'
import CartDetails from './Pages/Cart/CartDetails'

function App() {

  return (
   <>
    <Routes >
      <Route path='/' element ={<Home />} />
      <Route path='/denied' element = {<Denied />} />
      <Route path='/auth/signup' element ={<Signup />} />
      <Route path='/auth/login' element ={<Login />} />
      <Route path='/admin/addproduct' element= {<AddProduct />} />
      <Route path='/product/:productId' element ={<ProductDetails />} />
      <Route path='/cart' element = {<CartDetails />} />
      <Route path='*' element ={<NotFound />} />
    </Routes>
    
   </>
  )
}

export default App
