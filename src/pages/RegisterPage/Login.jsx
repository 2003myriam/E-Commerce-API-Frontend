import React, { useState } from 'react'
import "./Register.css"
import axios from "axios"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


function Login() {
  const[email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")
    const navigate = useNavigate();
    
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const loginUser =async () =>{
    try {
      const response =await  axios.post("http://localhost:5001/Profile/login",{email, password})
      navigate("/");
      setError("");
    } 
    catch (error) {
      console.log("Error");
       setError(error.response.data.message|| "Server error")
    }
  }
  return (
     <div className="register-container">
      <div className="register-box">

        <h2>Welcome back</h2>
        <p>Sign in to continue shopping.</p>

        <button>Google</button>
        <button>GitHub</button>

        <div className="divider">
          <hr />
          <span>or</span>
          <hr />
        </div>

        <label>Email</label>
        <input type="email" value={email} onChange={handleEmailChange} />

        <label>Password</label>
        <input type="password" value={password} onChange={handlePasswordChange}/>

        <label className="checkbox">
          <input type="checkbox" />
          <span>
             Remember me
          </span>
        </label>
        <p id="error-message">{error}</p>
        <button id='create_btn' onClick={loginUser} >Create account</button>


        <p className='haveaccount'>
          No account ?<Link to={"/register"}> Create one</Link>
        </p>

      </div>
    </div>
  )
}

export default Login
