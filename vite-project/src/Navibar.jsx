import React from 'react'
import './Nav.css'
import logo from './assets/logo.jpg'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>
        <div className="nav-links">
              <ul>
                  <li><a href='Home'>Home</a></li>
                  <li><a href='About'>Location</a></li>
                  <li><a href='Project'>About</a></li>
                  <li><a href='Contect'>Contact</a></li>
                </ul> 
        </div>
        <div className="nav-btn">
            <button className="lg-btn">Login</button>
        </div>
    </div>
  )
}

export default Navbar