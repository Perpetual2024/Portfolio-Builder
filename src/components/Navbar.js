import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar.css'


function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-logo'>Portfolio</div>
        <ul className='navbar-links'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contacts</Link></li>


        </ul>
      </div>
    </nav>
  )
}

export default Navbar