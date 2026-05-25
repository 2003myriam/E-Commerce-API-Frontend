import React from 'react'
import logo from "/src/assets/logo.png"
import { MdFavoriteBorder } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6"; 
import { MdDarkMode } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import "./NavBar.css"
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='NavBar'>

      <img src={logo} alt="logo" />

      <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>Categories</li>
      </ul>

      <div className='search'>
       <CiSearch />
        <input
          type="text"
          placeholder='Search Product, Brands, categories....'
        />
      </div>
      <div className='NavBar-icone'>
      <MdDarkMode />
      <MdFavoriteBorder />
      <RiAdminLine />
      <FaCartShopping />
      </div>
      <div className='NavBar-responsive-btn'>
      <button>Sign in</button>
     <Link to="/register" className="btn-signup">
      Sign up</Link>
     
      </div>
     

    </div>
  )
}

export default NavBar