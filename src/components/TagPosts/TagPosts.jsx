import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { getAllPostsByTagAsync } from '../../store/postsSlice';
import Spinner from './../Spinner/Spinner';
import PostCard from "../PostsList/PostCard";

const TagPosts = (props) => {
    const { tagName, limit, skip } = props;
    const dispatch = useDispatch();
    const { posts, error, isPending } = useSelector((state) => state.posts);
    useEffect(() => {
        dispatch(getAllPostsByTagAsync({tagName, limit, skip}));
    }, [dispatch, tagName, limit, skip]);
    const showPost = (post) => <PostCard post={post} withPic />
    if (error) {
        return <p>{error}</p>
    }
    if (isPending) {
        return <Spinner />
    }
    return posts.length === 0 ? <p>Post list empty</p> : <div>{posts.map(showPost)}</div>;
};

TagPosts.propTypes = {
    tagName: PropTypes.string,
    limit: PropTypes.number,
    skip: PropTypes.number,
};

export default TagPosts;
