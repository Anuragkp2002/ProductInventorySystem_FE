import React from 'react';
import './Dashboard.css';
import user from '../../assets/images/user.jpg'
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const navigate = useNavigate();
  return (
    <div className="dash-container">
      <nav className="navbar">
        <div className="navbar-left">
          <img src={user} alt="User" className="user-image" />
          <h2>My Dashboard</h2>
        </div>
      </nav>
      
      <div className="button-group">
        <button type='submit' className="product-button" onClick={() => navigate('/productcreation')}>Product</button>
        <button type='submit' className="purchase-button">Purchase</button>
        <button type='submit' className="sale-button">Sales</button>
      </div>

    </div>
  );
};

export default Dashboard;