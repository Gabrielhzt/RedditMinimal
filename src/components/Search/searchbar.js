import React from 'react';
import './searchbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 

const Search = () => {
  return (
    <>
      <div className='Searchbar'>
        <FontAwesomeIcon icon={faSearch} style={{color: '#fff'}} />
        <input className='input' type='text' placeholder='Search on Reddit' />
      </div>
    </>
  );
}

export default Search;