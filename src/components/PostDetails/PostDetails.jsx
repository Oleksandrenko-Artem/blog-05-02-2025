import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getOnePostAsync, getAllCommentsByPostAsync } from '../../store/postsSlice';
import { mdiThumbUp, mdiThumbDown } from '@mdi/js';
import { getOneUser } from './../../api/index';
import Icon from '@mdi/react';
import CommentsList from './../CommentsList/CommentsList';
import Spinner from './../Spinner/Spinner';
import styles from './PostDetails.module.scss';

const PostDetails = () => {
    const dispatch = useDispatch();
    const { postId } = useParams();
    const { selectedPost, comments, error, isPending} = useSelector(
        (state) => state.posts
    );
    const [author, setAuthor] = useState(null);
    const [image, setImage] = useState(null);
    useEffect(() => {
        dispatch(getOnePostAsync(postId));
        dispatch(getAllCommentsByPostAsync(postId));
    }, [dispatch, postId]);
    useEffect(() => {
        const loadUser = async () => {
            try {
                const response = await getOneUser(selectedPost.userId);
                setAuthor(`${response.data.firstName} ${response.data.lastName}`);
                setImage(response.data.image);
            } catch (error) {
                console.lod(error);
                setAuthor('anonim')
                setImage('/images/anonim.png');
            }
        }
        if (selectedPost) { loadUser(); }
    }, [selectedPost]);
    if (error) { return <p>error</p> }
    if (isPending) { return <Spinner /> }
    if (!selectedPost) { return <p>not post available</p> }
    return (
        <section className={styles['post-details']}>
            <div className={styles['flex-row']}>
                <div className={styles['flex-row']}>
                    <img className={styles['user-image']} src={image} />
                    <div>
                        <h2>{author} ({selectedPost.userId})</h2>
                        <p>Views: {selectedPost.views}</p>
                    </div>
                </div>
                <div className={styles['comment-reactions']}>
                    <Icon path={mdiThumbUp} size={1} />
                    {selectedPost.reactions.likes}
                    <Icon path={mdiThumbDown} size={1} />
                    {selectedPost.reactions.dislikes}
                </div>
            </div>
            <div>
                <div>
                    <h2>{selectedPost.title}</h2>
                    <p>{selectedPost.tags.join(' | ')}</p>
                    <picture>
                        <img className={styles['post-image']} src="/images/1600x1200.png" />
                    </picture>
                    <p>{selectedPost.body}</p>
                    <h3>Comments:</h3>
                    {comments.length === 0 ? (
                        <p>empty comments list</p>
                    ) : (
                        <CommentsList comments={comments} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default PostDetails;