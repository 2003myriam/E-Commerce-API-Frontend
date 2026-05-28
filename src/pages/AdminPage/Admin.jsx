import React from 'react'
import "./AdminAddCategory.css"
import SideBar from '../../Components/SidBar/SideBar'
import { Outlet } from 'react-router-dom'

function Admin() {
  return (
    <div  className='admin-container'>
      <SideBar/>
      <Outlet />
    </div>
  )
}

export default Admin
