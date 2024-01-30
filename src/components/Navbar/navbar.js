import React, { useState } from 'react';
import './navbar.css'
import Search from '../Search/searchbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
      setMenu(!menu)
    }


    return (
        <>
          <nav>
            <div className='logo'>
                <img src='../../favicon.ico' alt=''/>
                <h1><span style={{ color: '#046eba', fontWeight: 500 }}>Reddit</span>Minimal</h1>
            </div>
            <div className='Search'>
              <Search />
            </div>
            <div className='link'>
            <a href='https://reddit.com' target='_blank' rel='noopener noreferrer'>
              <button className='app' >Official App</button>
            </a>
            <a href='https://reddit.com' target='_blank' rel='noopener noreferrer'>
            <button className='official'>Official website</button>
            </a>
            </div>
            <div className='icon'>
              <FontAwesomeIcon icon={faBars} size='xl' onClick={handleMenu} />
            </div>
          </nav>
          {menu && 
          <div className='menu-link'>
            <a href='https://reddit.com' target='_blank' rel='noopener noreferrer'>
            <button className='official'>Official website</button>
            </a>
            <a href='https://reddit.com' target='_blank' rel='noopener noreferrer'>
              <button className='app'>Official App</button>
            </a>
          </div>
          }
          <div className='Search-2'>
            <Search />
          </div>
        </>
    )
}

export default Navbar;