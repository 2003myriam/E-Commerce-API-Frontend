import React from 'react'
import "./Register.css"

function Register() {
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
        <input type="text" />

        <label>Email</label>
        <input type="email" />

        <label>Password</label>
        <input type="password" />

        <label className="checkbox">
          <input type="checkbox" />
          <span>
             I agree to the Terms of Service and Privacy Policy.
          </span>
        </label>

        <button id='create_btn'>Create account</button>

        <p className='haveaccount'>
          Already have an account ? <a href="">Sign in</a>
        </p>

      </div>
    </div>
  )
}

export default Register