import { useState } from 'react'
 
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Register from './pages/RegisterPage/Register'
import Login from './pages/RegisterPage/Login'
import Categories from './pages/CategoriesPage/Categories'

function App() {
  

  return (
    <>
      <NavBar/>
    
      <Routes>
          
         <Route path='/' element={<HomePage/>}/>
         <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/categories' element={<Categories/>}/>
      </Routes>
    </>
  )
}

export default App
