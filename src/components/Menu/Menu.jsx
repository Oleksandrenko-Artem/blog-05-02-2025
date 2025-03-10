import { NavLink } from "react-router-dom";
import styles from './Menu.module.scss';

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul>
                <li><NavLink to='/' className={({ isActive }) => (isActive ? styles.active : undefined)}>Home</NavLink></li>
                <li><NavLink to='/posts' className={({isActive}) => (isActive ? styles.active : undefined)}>Blog</NavLink></li>
                <li><NavLink to='/users' className={({isActive}) => (isActive ? styles.active : undefined)}>Authors</NavLink></li>
            </ul> 
        </nav>
    );
}

export default Menu;
