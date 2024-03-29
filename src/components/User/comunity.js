// comunity.js
import React, { useState, useEffect } from 'react';
import './comunity.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularSubreddits } from '../../store/redditSlice';
import { selectSubreddits, selectLoading, selectError } from '../../store/redditSlice';

const Comunity = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [more, setMore] = useState(6);
  const [show, setShow] = useState('See more');

  const handleMore = () => {
    setMore(10);
    setShow('See less');
  };

  const handleLess = () => {
    setMore(6);
    setShow('See more');
  };

  useEffect(() => {
    dispatch(getPopularSubreddits());
  }, [dispatch]);

  const comunityLoad = () => {
    let numberComunitiesLoad = 6;

    const comunitiesLoad = (index) => (
      <div key={index}>
        <div className='all-com-load'>
          <div className='all-com-load-2'>
            <div className='com-load-img'></div>
            <div className='flex-com'>
              <div className='name-com-load'></div>
              <div className='num-com-load'></div>
            </div>
          </div>
        </div>
      </div>
    );

    const comunities = [];
    for (let i = 0; i < numberComunitiesLoad; i++) {
      comunities.push(comunitiesLoad(i));
    }

    return comunities;
  };

  return (
    <div className='comunity'>
      <h3>POPULAR COMMUNITIES</h3>
      {loading ? (
        <>{comunityLoad()}</>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className='space'>
          {subreddits
            .filter((props) => props.icon_img && props.display_name_prefixed && props.subscribers !== undefined)
            .slice(0, more)
            .map((props) => (
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
          <button className='more-btn' onClick={more === 6 ? handleMore : handleLess}>
            {show}
          </button>
        </div>
      )}
    </div>
  );
};

export default Comunity;
