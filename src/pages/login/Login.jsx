import React from 'react'

import './Login.css'
import login from '../../assets/images/login.jpg'


const Login = () => {
  return (
    <div className='container' style={{display:'flex',gap:'180px'}}>
      <img src={login} alt="Login" className="login-image" />
    
      <div className='login-container'>
      <h3>Login</h3>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" placeholder="Enter your email" />
      
      <label htmlFor="password">Password</label>
      <input type="password" id="password" placeholder="Enter your password" />
      
      <button type='submit'>Login</button>
      <p className="register-prompt">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>

    </div>

  )
}

export default Login


