import React from 'react';
import './App.css';
import Search from '../Search/searchbar';
import News from '../News/news';

const App = () => {
    return (
        <>
        <nav>
            <div className='logo'>
                <img src='../../favicon.ico'/>
                <h1><span style={{ color: '#046eba', fontWeight: 500 }}>Reddit</span>Minimal</h1>
            </div>
            <Search />
            <div className='link'>
              <button className='app'>Official App</button>
              <button className='official'>Official website</button>
            </div>
        </nav>
        <header>
            <News />
        </header>
        </>
    )
}

export default App;