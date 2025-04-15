import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getOneUser } from './../../api/index';
import styles from './AnotherPost.module.scss';

const AnotherPost = (props) => {
    const { post, withPic } = props;
        const [author, setAuthor] = useState(null);
        const navigate = useNavigate();
        const navigateToPostPage = () => {
                navigate(`/posts/${post.id}`);
        }
        useEffect(() => {
            const loadUser = async () => {
                try {
                    const response = await getOneUser(post.userId);
                    setAuthor(`${response.data.firstName} ${response.data.lastName}`);
                } catch (error) {
                    console.lod(error);
                    setAuthor('anonim')
                }
            }
            loadUser();
        }, [post.userId]);
        const stopPropagation = (event) => {
            event.stopPropagation();
        }
    return (
        <article onClick={navigateToPostPage} className={styles['another-post-card']}>
            {withPic && <picture>
                <img src="/images/300x200.png" alt={post.title} />
            </picture>}
            <div>
                <p>By <Link to={`/users/${post.userId}`} onClick={stopPropagation}>{author}</Link></p>
                <h2 className={styles['post-card_title']}>{post.title}</h2>
                <p>{post.body.slice(0, 80)}...</p>
            </div>
        </article>
    );
}

AnotherPost.propTypes = {
    withPic: PropTypes.bool,
    post: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        body: PropTypes.string,
        userId: PropTypes.number,
        tags: PropTypes.array,
    })
};

export default AnotherPost;
