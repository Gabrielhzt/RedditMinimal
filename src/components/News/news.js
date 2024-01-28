import React, { useEffect, useState } from 'react';
import './news.css';
import { getPopularSubreddits } from '../../api/reddit';

const News = () => {
  const [subreddits, setSubreddits] = useState([]);

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
    <div className='all'>
      {subreddits.map(({ id, banner_img, title, public_description, icon_img, display_name_prefixed }) => {
        if (id && banner_img && title && public_description && icon_img && display_name_prefixed) {
          return (
            <div key={id} className='news' style={{ backgroundImage: `url(${banner_img})` }}>
              <div className='text'>
                <div className='text-2'>
                  <h2>{title.slice(0, 24)}</h2>
                  <p>{public_description.slice(0, 37)}</p>
                  <div className='users'>
                    <img src={icon_img} alt="User" />
                    <p>{display_name_prefixed}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}

    </div>
  );
}

export default News;
