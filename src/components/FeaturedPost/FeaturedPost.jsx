import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from './../Spinner/Spinner';
import styles from './FeaturedPost.module.scss';

const FeaturedPost = (props) => {
    const { imgPosition } = props;
    const { posts } = useSelector((store) => store.posts);
    const [featuredPost, setFeaturedPost] = useState(null);
    useEffect(() => {
        if (posts.length > 0) {
            const sortedPost = [...posts].sort(
                (post1, post2) => post2.views - post1.views
            );
            setFeaturedPost(sortedPost.at(0));
        }
    }, [posts]);
    if (!featuredPost) {
        return <Spinner/>
    }
    return (
        <>
            {imgPosition === 'under' && <div className={styles['full-screen']}><img src={'/images/1600x1200.png'} /></div>}
            <article className={styles['featured-blog']}>
                <div>
                    {imgPosition === 'over' && <img src={'/images/600x400.png'} />}
                    <h2>{featuredPost.title}</h2>
                    <p>{featuredPost.body.slice(0, 100)}...</p>
                    <button><Link to={`/posts/${featuredPost.id}`}>Read more</Link></button>
                </div>
                {imgPosition === 'right' && <img src={'/images/600x400.png'} />}
            </article>
        </>
    );
};


FeaturedPost.propTypes = {
    imgPosition: PropTypes.string,
};


export default FeaturedPost;