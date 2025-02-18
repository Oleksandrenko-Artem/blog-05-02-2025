import { PropTypes } from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { loginUserAuth } from '../../store/userSlice';
import { Icon } from '@mdi/react';
import { useState } from 'react';
import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js';
import styles from './LoginForm.module.scss';

const LoginForm = (props) => {
    const { closeModal } = props;
    const [showPassword, setShowPassword] = useState(mdiEyeOutline);
    const [type, setType] = useState('password');
    const dispatch = useDispatch();
    const onSubmit = (values) => {
        dispatch(loginUserAuth(values));
        closeModal();
    }
    const changeType = () => {
        if (type==='password') {
            setType('text');
            setShowPassword(mdiEyeOffOutline);
        } else {
            setType('password');
            setShowPassword(mdiEyeOutline);
        }
    }
    return (
        <Formik initialValues={{
            username: 'emilys',
            password: 'emilyspass'
        }}
            onSubmit={onSubmit}
        >
            {() => {
                return (
                    <Form className={styles.form}>
                        <label>
                            <span>username</span>
                            <Field name="username" />
                            <ErrorMessage name="username" />
                        </label>
                        <label className={styles.password}>
                            <span>password</span>
                            <Field name="password" type={type} />
                            <ErrorMessage name="password" />
                            <Icon path={showPassword} size={1.2} onClick={changeType} className={styles.eye}/>
                        </label>
                        <button type='submit'>log in</button>
                    </Form>
                );
            }}
        </Formik>
    );
};

LoginForm.propTypes = {
    closeModal: PropTypes.func
}

export default LoginForm;
