import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <h2>Finsweet</h2>
            <div>
                <ul>
                    <li><NavLink to='/' className={({ isActive }) => (isActive ? styles.active : undefined)}>Home</NavLink></li>
                    <li><NavLink to='/posts' className={({ isActive }) => (isActive ? styles.active : undefined)}>Blog</NavLink></li>
                    <li><NavLink to='/users' className={({ isActive }) => (isActive ? styles.active : undefined)}>Authors</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
