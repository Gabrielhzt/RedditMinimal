import React, { useState } from 'react';
import './searchbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchResult from '../SearchResult/searchresult';
import { getSearchResults2 } from '../../api/reddit';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = async (e) => {
    const query = e.target.value;
    setInputValue(query);

    try {
      if (query.trim() !== '') {
        const results = await getSearchResults2(query);
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className={`center All-search ${searchResults.length > 0 ? 'active' : ''}`}>
      <div className='Searchbar'>
        <FontAwesomeIcon icon={faSearch} style={{ color: '#fff' }} />
        <input
          className='input'
          type='text'
          placeholder='Search on Reddit'
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setSearchResults([])}
        />
      </div>

      {searchResults.length > 0 && 
        <div className='search-results-container'>
          <SearchResult results={searchResults} />
        </div>
      }
    </div>
  );
};

export default Search;
