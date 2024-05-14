import React from 'react'
import {Link} from 'react-router-dom'

import {useSelector} from 'react-redux'

const Navbar = () => {
  const cartCount = useSelector(state=>state.cart);
  return (
    <div style={{display:'flex' , alignItems:'center' , justifyContent:'space-between'}}> 
        <span className='logo'>LOGO</span>
        <div>
            <Link className='navLink' to='/'>Home</Link>
            <Link className='navLink' to='/cart'>Cart</Link>
            <span className='cartCount'>Cart Items : {cartCount.length}</span>
        </div>
    </div>
  )
}

export default Navbar