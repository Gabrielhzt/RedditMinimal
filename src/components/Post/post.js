import React, { useState, useEffect } from 'react';
import './post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faUpLong, faDownLong, faMessage, faArrowUpFromBracket, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { getBestSubredditPosts, getRisingSubredditPosts, getTopSubredditPosts } from '../../api/reddit';

const Post = () => {
  const [filter, setFilter] = useState(false);
  const [posts, setPosts] = useState([]);
  const [take, setTake] = useState('Top');
  const [loading, setLoading] = useState(true);

  const handleFilterClick = () => {
    setFilter(!filter);
  };

  const handleBest = () => {
    setTake('Best');
    setFilter(false);
  };

  const handleTop = () => {
    setTake('Top');
    setFilter(false);
  };

  const handleHot = () => {
    setTake('Hot');
    setFilter(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        let url;
        
        switch (take) {
          case 'Best':
            url = getBestSubredditPosts;
            break;
          case 'Top':
            url = getTopSubredditPosts;
            break;
          case 'Hot':
            url = getRisingSubredditPosts;
            break;
          default:
            url = getTopSubredditPosts;
        }

        const subredditPosts = await url();
        setPosts(subredditPosts.slice(0, 5));
      } catch (error) {
        console.error('Error fetching subreddit posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [take]);

  const postLoading = () => {
    const numpost = 6;
  
    const postload = (index) => (
      <div className='all-post-load' key={index}>
        <div className='flex'>
          <div className='flex-user'>
            <div className='user-img-post-load'></div>
            <div className='user-post-load'></div>
          </div>
          <div className='opt'>
            <div className='button-load'></div>
            <FontAwesomeIcon icon={faEllipsisH} />
          </div>
        </div>
        <div className='title-post-load'></div>
        <div className='text-post-load'></div>
        <div className='text-post-load'></div>
        <div className='text-post-load-2'></div>
      </div>
    );
  
    const posts = [];
    for (let i = 0; i < numpost; i++) {
      posts.push(postload(i));
    }
  
    return posts;
  };


  return (
    <div>
      <div>
        <button className='filter-btn' onClick={handleFilterClick} >
          {take}
          <FontAwesomeIcon icon={faChevronDown} size='sm' />
        </button>
        {filter && 
          <div className='filter'>
            <h4>Sort by</h4>
            <h5 onClick={handleTop}>Top</h5>
            <h5 onClick={handleBest}>Best</h5>
            <h5 onClick={handleHot}>Hot</h5>
          </div>
        }
      </div>
      {loading ? (
        <>{postLoading()}</>
      ) : (
      posts.map((post) => (
        <div key={post.id} className='all-post'>
          <div className='post'>
            <div>
              <div className='user-join'>
                <div className='user'>
                  <h4>{post.subreddit_name_prefixed}</h4>
                  <ul><li>{post.created_utc} ago</li></ul>
                </div>
                <div className='link'>
                  <button className='join-btn'>Join</button>
                  <FontAwesomeIcon icon={faEllipsisH} />
                </div>
              </div>
              <div className='content'>
                <div>
                  <h3 className='title-post'>{post.title}</h3>
                  <p className='text-post'>{post.selftext.slice(0, 180)}</p>
                </div>
                {post.preview && post.preview.images && post.preview.images[0] && post.preview.images[0].source && (
                  post.post_hint === 'image' ? (
                    <img src={post.url} alt="Post" />
                  ) : post.post_hint === 'hosted:video' ? (
                    <video >
                      <source src={post.media.reddit_video.fallback_url} type="video/mp4" />
                    </video>
                  ) : null
                )}
              </div>
            </div>
            <div className='all-btn'>
              <div className='btn-2'>
                <button className='vote-btn'><FontAwesomeIcon className='high' icon={faUpLong} size="lg" /></button>
                <p>
                {post.score > 1000
                ? `${(post.score / 1000).toFixed(1)}k`
                : `${post.score}`}
                </p>
                <button className='vote-btn-2'><FontAwesomeIcon icon={faDownLong} size="lg" /></button>
              </div>
              <button className='btn'>
                <FontAwesomeIcon icon={faMessage} size="lg" />
                <p>
                {post.num_comments > 1000
                ? `${(post.num_comments / 1000).toFixed(1)}k`
                : `${post.num_comments}`}
                </p>
              </button>
              <button className='btn'>
                <FontAwesomeIcon icon={faArrowUpFromBracket} size="lg" />
                <p>Share</p>
              </button>
            </div>
          </div>
        </div>
      ))
    )}
    </div>
  );
};

export default Post;


