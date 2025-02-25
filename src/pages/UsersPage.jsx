import { useState } from 'react';
import UsersList from "../components/UsersList/UsersList";
import Limit from './../components/Limit/Limit';
import CONSTANTS from '../constants';
import Pagination from '../components/Pagination/Pagination';
import styles from './pages.module.scss';

const UsersPage = () => {
    const limits = CONSTANTS.LIMITS;
    const [limitUsers, setLimitUsers] = useState(limits.at(0));
    const [page, setPage] = useState(1);
    const changeLimitUsers = (event) => {
        setLimitUsers(Number(event.target.value));
        setPage(1);
    };
    const skip = (page - 1) * limitUsers;
    return (
        <div className={styles.wrapper}>
            <h2>list of authors</h2>
            <Limit limit={limitUsers} changeLimit={changeLimitUsers} />
            <UsersList limit={limitUsers} skip={skip} />
            <Pagination page={page} setPage={setPage} />
        </div>
    );
}

export default UsersPage;
