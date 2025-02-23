import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Users.module.scss';

const UserCard = (props) => {
    const { user } = props;
    const navigate = useNavigate();
    const navigateToUserPage = () => {
        navigate(`/users/${user.id}`);
    }
    return (
        <article className={styles['user-card']} onClick={navigateToUserPage}>
            <div>
                <img src={user.image} alt="" />
            </div>
            <h3>{user.firstName} {user.lastName}</h3>
            <p>{user.company.title} @{user.company.department}</p>
        </article>
    );
};


UserCard.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number,
        image: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        company: PropTypes.shape({
            title: PropTypes.string,
            department: PropTypes.string,
        })
    })
};


export default UserCard;
