import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Login from './pages/login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/dashboard';
import Product from './components/product/Product';
import Purchase from './components/Purchase/Purchase';
import Sales from './components/sales/Sales';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/productcreation" element={<Product/>} />
          <Route path="/purchase" element={<Purchase/>} />
          <Route path="/sale" element={<Sales/>} />
          

          
          

        </Routes>
    </Router>
    // 
  )
}

export default App
