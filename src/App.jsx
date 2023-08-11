import React from 'react'
import './assets/styles.scss'
import {Route, Routes } from 'react-router-dom'
import Register from './Pages/Register'
import Login from './Pages/Login'
import MainHeader from './Components/MainHeader'
import Home from './Pages/Home'
import Category from './Pages/Category'
import Details from './Pages/Details'
import Footer from './Components/Footer.jsx/Footer'

function App (){
  return (
    <>
      <MainHeader/>             
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:cid' element={<Category />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer/>    
    </>
  )
}

export default App