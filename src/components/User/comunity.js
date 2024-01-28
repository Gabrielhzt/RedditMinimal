import React, { useState, useEffect } from 'react';
import './comunity.css';
import { getPopularSubreddits } from '../../api/reddit';

const Comunity = () => {
  const [subreddits, setSubreddits] = useState([]);
  const [more, setMore] = useState(6)
  const [show, setShow] = useState('See more')

  const handleMore = () => {
    setMore(10)
    setShow('See less')
  }

  const handleLess = () => {
    setMore(6)
    setShow('See more')
  }

  useEffect(() => {
    const fetchSubreddits = async () => {
      try {
        const subredditList = await getPopularSubreddits();
        setSubreddits(subredditList.slice());
      } catch (error) {
        console.error('Error fetching subreddits:', error);
      }
    };

    fetchSubreddits();
  }, []);

  return (
    <div className='comunity'>
      <h3>POPULAR COMMUNITIES</h3>
      <div className='space'>
        {subreddits
          .filter(props => props.icon_img && props.display_name_prefixed && props.subscribers !== undefined).slice(0,more).map((props) => (
            <div key={props.id} className='all-comunity'>
              <div className='img'>
                <img src={props.icon_img} alt={`Icon for ${props.display_name_prefixed}`} />
              </div>
              <div className='info-comunity'>
                <h4>{props.display_name_prefixed}</h4>
                <p>{`${Math.floor(props.subscribers / 1000000)}M members`}</p>
              </div>
            </div>
          ))}
        <button className='more-btn' onClick={more === 6 ? handleMore : handleLess}>{show}</button>
      </div>
    </div>
  );  
};

export default Comunity;
