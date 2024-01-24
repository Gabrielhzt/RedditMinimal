import React from 'react';
import './searchresult.css'
import populardata from '../Data/populardata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';

const SearchResult = () => {
    return (
        <div className='all-result'>
        <div className='result'>
            <div className='trend'>
              <FontAwesomeIcon icon={faArrowTrendUp} />
              <h4>Trends of the day</h4>
            </div>
            {populardata.slice(0, 6).map((props) => (
                <div className='all-info'>
                    <h3>{props.title}</h3>
                    <p>{props.text.slice(0, 30)}</p>
                    <div className='user'>
                        <img src={props.userimg}/>
                        <h6>{props.user} and more</h6>
                    </div>
                </div>
            ))}
        </div>
        </div>
    )
}

export default SearchResult;