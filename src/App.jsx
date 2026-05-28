import { useState } from 'react'
 
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Register from './pages/RegisterPage/Register'
import Login from './pages/RegisterPage/Login'
import Categories from './pages/CategoriesPage/Categories'
import AdminAddProduct from './pages/AdminPage/AdminAddProduct'
import AdminAddCategory from './pages/AdminPage/AdminAddCategory'
import Admin from './pages/AdminPage/Admin'

function App() {
  

  return (
    <>
      <NavBar/>
    
      <Routes>
          
         <Route path='/' element={<HomePage/>}/>
         <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/categories' element={<Categories/>}/>
              {/* Layout Admin Page */}
        <Route path="/admin" element={<Admin/>}>
          <Route path="product" element={<AdminAddProduct/>} />
           <Route path="category" element={<AdminAddCategory/>} />
          
        </Route>
 
      </Routes>
    </>
  )
}

export default App
