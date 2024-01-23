import React from 'react';
import './comunity.css'
import communityData from '../Data/comunitydata';

const Comunity = () => {
    return (
        <div className='comunity'>
            <h3>POPULAR COMUNITY</h3>
            <div className='space'>
            {communityData.slice(0, 5).map((props) => (
                <div className='all-comunity'>
                    <div className='img'>
                      <img src={props.profileimg} />
                    </div>
                    <div className='info-comunity'>
                        <h4>r/{props.name}</h4>
                        <p>{props.member} member</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Comunity;