import PropTypes from 'prop-types';
import styles from './ModalWindow.module.scss';


const ModalWindow = (props) => {
    const {children, closeModal} = props;
    return (
        <div className={styles['modal-overlay']}>
            <div className={styles['modal-window']}>
                <button onClick={closeModal} className={styles['button-modal-window']}>X</button>
                <div className={styles['modal-content']}>{children}</div>
            </div>
        </div>
    );
};


ModalWindow.propTypes = {
    children: PropTypes.any,
    closeModal: PropTypes.func
};


export default ModalWindow;

