import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

function SideBar() {
  return (
   <Sidebar className='admin-container'
      breakPoint="md"
      style={{
        height: "200px",
        border: "2px solid #332eba",
        borderRadius: "12px",
        overflow: "hidden", // pour que le borderRadius s'applique bien
        width: "200px",
        minWidth: "200px",
        marginLeft: "16px",
      }}
      rootStyles={{
        [".ps-sidebar-container"]: {
          height: "100%",
          padding: "1px",
        },
      }}
    >
      <Menu menuItemStyles={{
        button: {
          color: "#091211",
          borderRadius: "8px", // arrondi sur chaque item
          marginBottom: "6px",
          textAlign:"center",
          width: "200px",
        minWidth: "200px",
          "&:hover": {
            backgroundColor: "#1421b7",
            color: "#ffffff",
          },
        },
      }}>
        <MenuItem component={<Link to="/admin/category" />}>Category</MenuItem>
        <MenuItem component={<Link to="/admin/product" />} >Product</MenuItem>
      </Menu>
    </Sidebar>
  )
}

export default SideBar
