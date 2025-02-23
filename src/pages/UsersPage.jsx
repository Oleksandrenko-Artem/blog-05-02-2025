import styles from './pages.module.scss';
import UsersList from "../components/UsersList/UsersList";

const UsersPage = () => {
    return (
        <div className={styles.wrapper}>
            <h2>Autors</h2>
            <UsersList/>
        </div>
    );
}

export default UsersPage;
