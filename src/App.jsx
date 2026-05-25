import { useState } from 'react'
 
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Register from './pages/RegisterPage/Register'

function App() {
  

  return (
    <>
      <NavBar/>
      <HomePage/>
      <Routes>
         
         <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
