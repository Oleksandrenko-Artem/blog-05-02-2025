import PostDetails from '../components/PostDetails/PostDetails';
import AnotherPostsList from '../components/AnotherPosts/AnotherPostsList';
import styles from './pages.module.scss';

const PostPage = () => {
    return (
        <div>
            <PostDetails />
            <h2 className={styles.caption}>What to read next</h2>
            <AnotherPostsList/>
        </div>
    );
};

export default PostPage;
