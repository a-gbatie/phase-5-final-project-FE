import React from 'react'
import { Link } from 'react-router-dom'
import { Icon, Menu } from 'semantic-ui-react'

const NavBar = ({ user, handleLogout }) => {

  return (
    <header>
      {/* <h1> Bonne Nuit</h1> */}
      <ul className='links' >
        {Object.keys(user).length > 1 ? (
          <>
          <li>
            <Menu.Item
              as={Link}
              to='/platforms'
            >
              <Icon className='homePage' size='large' name='home'>Home</Icon>
            </Menu.Item>
          </li>
          <li id='logout'>
          <Menu.Item
              as={Link}
              to='/login'
              onClick={handleLogout}
            >
              <Icon size='large' name='sign-out'>Logout</Icon>
            </Menu.Item>
          {/* <NavLink to='/login'>Logout</NavLink> */}
          </li>
          <li>
          <Menu.Item
              as={Link}
              to='/about'
            >
              <Icon className='about' size='large' name='question'>About</Icon>
            </Menu.Item>
          </li>
          <li>
          <Menu.Item
              as={Link}
              to='/favorites'
            >
              <Icon className='faves' size='large' name='star'>Favorites</Icon>
            </Menu.Item>
          </li>
        </>
         ) : (
          <li>
            <Menu.Item
              as={Link}
              to='/login'
            >
              <Icon className='signin' size='large' name='sign-in'>Login</Icon>
            </Menu.Item>
              {/* <NavLink to='/login'>
                Login
              </NavLink> */}
            </li>
        )}
      </ul>
    </header>
  )
}


export default NavBar;
