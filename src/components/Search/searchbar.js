import React, { useState } from 'react';
import './searchbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchResult from '../SearchResult/searchresult';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [showResults, setShowResults] = useState(false);


  return (
    <div className={`center All-search ${showResults ? 'active' : ''}`}>
      <div className='Searchbar'>
        <FontAwesomeIcon icon={faSearch} style={{ color: '#fff' }} />
        <input
          className='input'
          type='text'
          placeholder='Search on Reddit'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
        />
      </div>

      {showResults && 
        <div className='search-results-container'>
          <SearchResult />
        </div>
      }
    </div>
  );
};

export default Search;
