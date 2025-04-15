import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { getAllPostsAsync } from "../../store/postsSlice";
import AnotherPost from './AnotherPost';
import Spinner from '../Spinner/Spinner';
import styles from './AnotherPost.module.scss';

const AnotherPostsLIst = (props) => {
    const { limit = 3, skip = 0 } = props;
    const dispatch = useDispatch();
    const { posts, error, isPending } = useSelector((state) => (state.posts));
    useEffect(() => {
        dispatch(getAllPostsAsync({ limit, skip }));
    }, [dispatch, limit, skip]);
    const showPost = (post) => <AnotherPost key={post.id} post={post} withPic={true} />
    if (error) {
        return <p>{error}</p>;
    }
    if (isPending) {
        return <Spinner />;
    }
    return (<section>{posts.length === 0 ? <p>Post list empty</p> : <section className={styles.posts}>{posts.map(showPost)}</section>}</section>)
}

AnotherPostsLIst.propTypes = {
    withPic: PropTypes.bool,
    limit: PropTypes.number,
    skip: PropTypes.number,
};

export default AnotherPostsLIst;
