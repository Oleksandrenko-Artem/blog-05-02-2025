import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneUserAsync } from "../../store/usersSlise";
import Spinner from './../Spinner/Spinner';
import styles from './UserProfile.module.scss';

const UserProfile = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();
    const { selectedUser, error, isPending } = useSelector(
        (state) => state.users
    );

    useEffect(() => {
        dispatch(getOneUserAsync(userId));
    }, [dispatch, userId]);

    if (error) { return <p>error</p> }
    if (isPending) { return <Spinner />}
    if (!selectedUser) {return <p>not user profile available</p>}
    
    return (
        <div className={styles.bg}>
            <div className={styles.wrapper}>
                <section className={styles['user-info']}>
                    <img src={selectedUser.image} alt={selectedUser.firstName} className={styles['user-image']} />
                    <div>
                        <h2>{selectedUser.firstName} {selectedUser.lastName}</h2>
                        <p>{selectedUser.email}</p>
                        <p>{selectedUser.company.title}</p>
                    </div>
                </section>
                <div className={styles['bottom-line']}></div>
            </div>
        </div>
    );
}

export default UserProfile;
