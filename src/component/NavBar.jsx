import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
        <ul>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
    </>
  )
}

export default NavBar