import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <h2>Finsweet</h2>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
