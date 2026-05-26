import React, { useState } from 'react'
import "./Register.css"
import axios from "axios"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";



function Register() {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState("")
  const navigate = useNavigate();
  const handleNameChange = (e) => {
  setName(e.target.value)
}

const handleEmailChange = (e) => {
  setEmail(e.target.value)
}

const handlePasswordChange = (e) => {
  setPassword(e.target.value)
}
  const registerUser =async () =>{
    try {
      const response =await  axios.post("http://localhost:5001/Profile/register",{name, email, password})
      navigate("/");
      setError("");
    } catch (error) {
      console.log("Error");
       setError(error.response.data.message|| "Server error")
    }
  }
  return (
    <div className="register-container">
      <div className="register-box">

        <h2>Create your account</h2>
        <p>Join Us and unlock exclusive deals.</p>

        <button>Google</button>
        <button>GitHub</button>

        <div className="divider">
          <hr />
          <span>or</span>
          <hr />
        </div>

        <label>Full Name</label>
        <input type="text" value={name} onChange={handleNameChange}/>

        <label>Email</label>
        <input type="email" value={email} onChange={handleEmailChange} />

        <label>Password</label>
        <input type="password" value={password} onChange={handlePasswordChange}/>

        <label className="checkbox">
          <input type="checkbox" />
          <span>
             I agree to the Terms of Service and Privacy Policy.
          </span>
        </label>
        <p id="error-message">{error}</p>
        <button id='create_btn' onClick={registerUser} >Create account</button>


        <p className='haveaccount'>
          Already have an account ?  
          <Link to={"/login"}> Sign in</Link>  
        </p>

      </div>
    </div>
  )
}

export default Register