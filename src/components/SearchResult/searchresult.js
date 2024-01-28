import React from 'react';
import './searchresult.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';

const SearchResult = ({ results }) => {
  return (
    <div className='all-result'>
      <div className='result'>
        <div className='trend'>
          <FontAwesomeIcon icon={faArrowTrendUp} />
          <h4>Trends of the day</h4>
        </div>
        {results
          .slice(0, 6)
          .map((props) => (
            <div className='all-info' key={props.id}>
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
                        <source src={props.url}/>
                      </video>
                    ) : (
                        props.preview &&
                        props.url && (
                          <img
                            src={props.url}
                            alt="User"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        )
                      )}
                  </div>
                </>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchResult;
