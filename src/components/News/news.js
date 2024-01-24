import React from 'react';
import './news.css';
import populardata from '../Data/populardata';

const News = () => {
    return (
        <>
        <div className='all'>
          {populardata.map((props) => (
            <div className='news' style={{backgroundImage: `url(${props.backgroundimg})`}}>
            <div className='text'>
              <div className='text-2'>
                <h2>{props.title}</h2>
                <p>{props.text.slice(0, 38)}...</p>
                <div className='users'>
                  <img src='https://rdsimages.cookieless.ca/polopoly_fs/1.18044053.1705892379!/img/httpImage/image.jpg_gen/derivatives/details-hdpi/image.jpg' />
                  <p>{props.user}</p>
                </div>
              </div>
            </div>
            </div>
          ))}
          </div>
       </>
    )
}

export default News;