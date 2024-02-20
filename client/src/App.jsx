import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'  
import About from './pages/About'
import Signup from './pages/Signup'  
import Signin from './pages/Signin'
import Products from './pages/Products'
import Dashboard from './pages/Dashboard'


export default function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/about" element ={<About/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element ={<Signin/>}/>
      <Route path="/products" element ={<Products/>}/>
      <Route path="/dashboard" element ={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}
