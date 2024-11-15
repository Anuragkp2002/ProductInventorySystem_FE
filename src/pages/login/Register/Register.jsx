import React from 'react';
import './Register.css';  
import register from '../../../assets/images/register.jpg'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='container' style={{display:'flex',gap:'180px'}}>
        
        <div className="register-container">
        <h3>Create an Account</h3>
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your full name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />

            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" id="phoneNumber" placeholder="Enter your phone number" />

            <button type="submit">Register</button>
            <p className="register-prompt">
            Already have an account? <a href="/">Login</a>
          </p>
        </form>
        
        </div>
        <img src={register} alt="Register" className="register-image"/>
    </div>
  );
};

export default Register;
