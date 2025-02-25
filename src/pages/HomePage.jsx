import UsersList from '../components/UsersList/UsersList';
import styles from './pages.module.scss';

const HomePage = () => {
    return (
        <div className={styles.wrapper}>
            <UsersList />
        </div>
    );
}

export default HomePage;
