import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, Link } from 'react-router-dom';
import { getOneUser } from './../../api/index';
import styles from './PostsList.module.scss';

const PostCard = (props) => {
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
        <article onClick={navigateToPostPage} className={styles['post-card']}>
            {withPic && (<picture>
                <source media='(min-width: 960px)' srcSet='/images/600x400.png'/>
                <img src="/images/300x200.png" alt={post.title} />
            </picture>)}
            <div>
                {withPic ? <p>{post.tags.join(' | ')}</p> : <p>By <Link to={`/users/${post.userId}`} onClick={stopPropagation}>{author}</Link></p>}
                <h2 className={styles['post-card_title']}>{post.title}</h2>
                {withPic && <p>{post.body.slice(0, 80)}...</p>}
            </div>
        </article>
    );
};

PostCard.propTypes = {
    withPic: PropTypes.bool,
    post: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        body: PropTypes.string,
        userId: PropTypes.number,
        tags: PropTypes.array,
    })
};

export default PostCard;
