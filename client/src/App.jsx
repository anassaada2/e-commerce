import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'  
import About from './pages/About'
import Signup from './pages/Signup'  
import Signin from './pages/Signin'
import Products from './pages/Products'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import FooterCom from './components/FooterCom'
import PrivteRoute from './components/PrivteRoute'
import CreateProduct from './pages/CreateProduct'
import  OnlyAdminPrivteRoute from './components/OnlyAdminPrivteRoute'

export default function App() {
  
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/about" element ={<About/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element ={<Signin/>}/>
      <Route path="/products" element ={<Products/>}/>
      <Route element={<PrivteRoute/>}>
        <Route path="/dashboard" element ={<Dashboard/>}/>
      </Route>
      <Route element={<OnlyAdminPrivteRoute/>}>
        <Route path="/createProduct" element ={<CreateProduct/>}/>
      </Route>
    </Routes>
    <FooterCom/>
    </BrowserRouter>
    
  )
}
