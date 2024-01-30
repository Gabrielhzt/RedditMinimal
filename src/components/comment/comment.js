import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './comment.css';
import Comunity from '../User/comunity';
import { getCommentsForPost, getPostDetails } from '../../api/reddit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpLong, faDownLong, faMessage, faArrowUpFromBracket, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Comments = () => {
    const { postId } = useParams();
    const [comments, setComments] = useState([]);
    const [postDetails, setPostDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        const fetchPostDetails = async () => {
            try {
                const details = await getPostDetails(postId);
                setPostDetails(details);
            } catch (error) {
                console.error('Error fetching post details:', error);
            } finally {
                setLoading(false);
            }
        };

        const fetchComments = async () => {
            try {
                const postComments = await getCommentsForPost(postId);
                setComments([...postComments]);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };
        
        if (postId) {
            fetchPostDetails();
            fetchComments();
        }
    }, [postId]);

    const AllLoad = () => {
        return <h1>Loading...</h1>
    }

    return (
        <div className='comments-container'>
            <div className='back' onClick={goBack}>
                <FontAwesomeIcon icon={faArrowLeft} size='sm'/>
                <h3>Back</h3>
            </div>
            {loading && <AllLoad />}
            {postDetails && (
                <div className='grid' key={postDetails.id}>
                    <div className='postDetails'>
                        <h4>{postDetails.subreddit_name_prefixed}</h4>
                        <p>{postDetails.author}</p>
                        <h2>{postDetails.title}</h2>
                        <p>{postDetails.selftext}</p>
                        {postDetails.url && 
                            <div className='post-img'>
                                <img src={postDetails.url} alt="" />
                            </div>
                        }
                        <div className='all-btn-2'>
                            <div className='btn-4'>
                                <button className='vote-btn'><FontAwesomeIcon className='high' icon={faUpLong} size="lg" /></button>
                                <p>
                                    {postDetails.ups > 1000
                                    ? `${(postDetails.ups / 1000).toFixed(1)}k`
                                    : `${postDetails.ups}`}
                                </p>
                                <button className='vote-btn-2'><FontAwesomeIcon icon={faDownLong} size="lg" /></button>
                            </div>
                            <button className='btn-3'>
                                <FontAwesomeIcon icon={faMessage} size="lg" />
                                <p>{postDetails.num_comments}</p>
                            </button>
                            <button className='btn-3'>
                                <FontAwesomeIcon icon={faArrowUpFromBracket} size="lg" />
                                <p>Share</p>
                            </button>
                        </div>
                    </div>
                    <div className='second'>
                        <Comunity />
                    </div>
                </div>
            )}
            {comments.map((comment) => (
               <div className='all-comment' key={comment.data.id}>
               <div className='post'>
                   <div>
                       <h4>{comment.data.author}</h4>
                       <p>{comment.data.body}</p>
                   </div>
                   <div className='all-btn'>
                       <div className='btn-2'>
                           <button className='vote-btn'><FontAwesomeIcon className='high' icon={faUpLong} size="lg" /></button>
                           <p>
                               {comment.data.ups > 1000
                               ? `${(comment.data.ups / 1000).toFixed(1)}k`
                               : `${comment.data.ups}`}
                           </p>
                           <button className='vote-btn-2'><FontAwesomeIcon icon={faDownLong} size="lg" /></button>
                       </div>
                       <button className='btn'>
                           <FontAwesomeIcon icon={faMessage} size="lg" />
                           <p>Reply</p>
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

export default Comments;
