import { Link } from 'react-router-dom';
import CONSTANTS from './../constants';
import UsersList from '../components/UsersList/UsersList';
import PostsList from './../components/PostsList/PostsList';
import FeaturedPost from '../components/FeaturedPost/FeaturedPost';
import TagsList from './../components/TagsList/TagsList';
import styles from './pages.module.scss';

const HomePage = () => {
    return (
        <>
            <section className={styles.relative}>
                <FeaturedPost imgPosition='under' />
            </section>
            <div className={styles.wrapper}>
                <section className={styles['all-posts']}>
                    <div className={styles['featured-post']}>
                        <h2>Featured Post</h2>
                        <FeaturedPost imgPosition='over' />
                    </div>
                    <div>
                        <div className={styles['posts-list']}>
                            <h2>List of posts</h2>
                            <Link to='/posts'>view all</Link>
                        </div>
                        <PostsList limit={CONSTANTS.LIMITS_POSTS.at(1)} />
                        </div>
                </section>
                <section>
                    <h2>List of authors</h2>
                    <UsersList />
                </section>
                <section>
                    <h2>Choose a tag</h2>
                    <TagsList/>
                </section>
            </div>
        </>
    );
}

export default HomePage;
