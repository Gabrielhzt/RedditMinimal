import React, { useState } from 'react';
import './App.css';
import Search from '../Search/searchbar';
import News from '../News/news';
import Post from '../Post/post';
import Comunity from '../User/comunity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const App = () => {
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
              <button className='app'>Official App</button>
              <button className='official'>Official website</button>
            </div>
            <div className='icon'>
              <FontAwesomeIcon icon={faBars} size='xl' onClick={handleMenu} />
            </div>
        </nav>
        {menu && 
        <div className='menu-link'>
          <button className='app'>Official App</button>
          <button className='official'>Official website</button>
        </div>
        }
        <header>
          <div className='Search-2'>
            <Search />
          </div>
            <News />
        </header>
        <main>
            <div className='Post'>
              <Post />
            </div>
            <div className='comunity-all'>
              <Comunity  />
            </div>
        </main>
        </>
    )
}

export default App;