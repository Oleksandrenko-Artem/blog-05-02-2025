import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { mdiLoginVariant, mdiLogoutVariant } from '@mdi/js';
import { clearError, clearUser } from '../../store/userSlice';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Icon from '@mdi/react';
import Menu from './../Menu/Menu';
import ModalWindow from './../ModalWindow/ModalWindow';
import LoginForm from './../forms/LoginForm';
import Spinner from './../Spinner/Spinner';

const Header = () => {
    const { user, error, isPending } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [isShowModal, setIsShowModal] = useState(false);
    const handleLogin = () => {
        setIsShowModal(true);
    };
    const closeModal = () => {
        setIsShowModal(false);
    };
    const closeErrorModal = () => {
        dispatch(clearError());
    };
    const closeUserModal = () => {
        dispatch(clearUser());
    };
    return (
        <header className={styles.header}>
            <div className={styles['header-top']}>
                {isPending ? <div className={styles['header-spinner']}><Spinner/></div> : user ? (
                    <p>
                        <span>Welcome, {user.username}</span>
                        <Icon size={1} path={mdiLogoutVariant} onClick={closeUserModal} />
                    </p>
                ) : (
                        <Icon size={1} path={mdiLoginVariant} onClick={handleLogin} />
                )}
            </div>
            <div className={styles['header-bottom']}>
                <Link className={styles.logo} to='/'>Logo</Link>
                <Menu />
                <input type="text" placeholder='search'/>
            </div>
            {isShowModal && (
                <ModalWindow closeModal={closeModal}>
                    <LoginForm closeModal={closeModal} />
                </ModalWindow>
            )}

            {error && <ModalWindow closeModal={closeErrorModal}>{error}</ModalWindow>}
        </header>
    );
}

export default Header;
