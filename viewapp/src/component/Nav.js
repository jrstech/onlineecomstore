import React, { useEffect } from 'react'
import { Link }  from 'react-router-dom'


const Nav = () => {
  const auth = localStorage.getItem('userformation')
  return (
    <div>
      <div className='navlink d-flex'>
        <li><Link to="/"> Product</Link></li>
        <li><Link to="/add"> Add Product</Link></li>
        <li><Link to="/update"> Update Product</Link></li>
        <li><Link to="/profile"> Profile Component</Link></li>
        <li>{auth? <Link to="/logout"> Logout</Link> :<Link to="/signup"> Sign Up</Link>}</li>
      </div>
    </div>
  )
}

export default Nav
