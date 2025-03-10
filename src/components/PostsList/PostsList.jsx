import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllPostsAsync } from './../../store/postsSlice';
import Spinner from '../Spinner/Spinner';
import PostCard from './PostCard';

const PostsList = (props) => {
    const { withPic, limit, skip = 0 } = props;
    const dispatch = useDispatch();
    const { posts, error, isPending } = useSelector((state) => state.posts);
    useEffect(() => {
        dispatch(getAllPostsAsync({limit, skip}));
    }, [dispatch, limit, skip]);
    const showPost = (post) => <PostCard key={post.id} post={post} withPic={withPic} />
    if (error) {
        return <p>{error}</p>;
    }
    if (isPending) {
        return <Spinner />;
    }
    return posts.length === 0 ? <p>List users empty</p> : <section>{posts.map(showPost)}</section>;
}

PostsList.propTypes = {
    withPic: PropTypes.bool,
    limit: PropTypes.number,
    skip: PropTypes.number,
};

export default PostsList;
