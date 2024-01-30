import React, { useState } from 'react';
import './searchresult.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';

const SearchResult = ({ results }) => {
  const [resultClicked, setResultClicked] = useState(false);

  const handleResultClick = () => {
    // Set the state to indicate that a result has been clicked
    setResultClicked(true);
  };

  return (
    <div className='all-result'>
      {!resultClicked && (  // Conditionally render the search results if not clicked
        <div className='result'>
          <div className='trend'>
            <FontAwesomeIcon icon={faArrowTrendUp} />
            <h4>Top research</h4>
          </div>
          {results.slice(0, 6).map((props) => (
            <div className='all-info' key={props.id}>
              <Link
                to={`/comments/${props.id}`}
                className='style-2'
                onClick={handleResultClick} // Call the handler when a result is clicked
              >
                {props && (
                  <>
                    <div className='all-info2'>
                      <div>
                        <h3>{props.title}</h3>
                        <p>{props.text && props.text.slice(0, 30)}</p>
                        <div className='user'>
                          <h6>{props.author} and more</h6>
                        </div>
                      </div>
                      {props.post_hint === 'hosted:video' ? (
                        <video>
                          <source src={props.url} />
                        </video>
                      ) : (
                        props.preview &&
                        props.url && (
                          <img
                            src={props.url}
                            alt='User'
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        )
                      )}
                    </div>
                  </>
                )}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
