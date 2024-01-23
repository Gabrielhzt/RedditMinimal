import React from 'react';
import './post.css'
import postdata from '../Data/postdata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faUpLong, faDownLong, faMessage, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

const Post = () => {
    return (
        <div>
           {postdata.map((props) => (
              <div className='all-post'>
                <div className='post'>
                    <div>
                    <div className='user-join'>
                      <div className='user'>
                        <img src={props.profileimg} />
                        <h4>r/{props.name}</h4>
                        <ul><li>{props.time} ago</li></ul>
                      </div>
                     <div className='link'>
                        <button className='join-btn'>Join</button>
                        <FontAwesomeIcon icon={faEllipsisH} />
                     </div>
                    </div>
                    <h3 className='title-post'>{props.title}</h3>
                    <p className='text-post'>{props.text}</p>
                    </div>
                    <div className='all-btn'>
                      <div className='btn-2'>
                        <button className='vote-btn'><FontAwesomeIcon className='high' icon={faUpLong} size="lg" /></button>
                        <p>{props.upvotes}</p>
                        <button className='vote-btn-2'><FontAwesomeIcon icon={faDownLong} size="lg" /></button>
                      </div>
                      <button className='btn'>
                        <FontAwesomeIcon icon={faMessage} size="lg" />
                        <p>{props.comments}</p>
                      </button>
                      <button className='btn'>
                        <FontAwesomeIcon icon={faArrowUpFromBracket} size="lg" />
                        <p>Share</p>
                      </button>
                    </div>
                </div>
              </div>
            ))}
        </div>
    )
}

export default Post;