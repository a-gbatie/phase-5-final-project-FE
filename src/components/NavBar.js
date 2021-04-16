import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <header>
      <h1>TBD</h1>
      <ul>
        {!user.id ? (
          <>
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
            <li>
              <NavLink to='/signup'>Sign Up</NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to='/' exact>
                Home
              </NavLink>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default NavBar;