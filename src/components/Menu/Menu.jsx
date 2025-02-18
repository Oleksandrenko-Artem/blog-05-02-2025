import { NavLink } from "react-router-dom";
import styles from './Menu.module.scss';

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/users'>Authors</NavLink></li>
            </ul> 
        </nav>
    );
}

export default Menu;
