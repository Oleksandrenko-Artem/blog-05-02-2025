import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { mdiMagnify } from '@mdi/js';
import Icon from '@mdi/react';
import styles from './SearchForm.module.scss';

const SearchForm = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            q: ''
        },
        onSubmit: (values) => {
            const trimQ = values.q.trim();
            navigate(`/posts/search?q=${trimQ}`);
        }
    })
    return (
        <form onSubmit={formik.handleSubmit} className={styles.form}>
            <input
                type="search"
                name='q'
                placeholder='search posts...'
                value={formik.values.q}
                onChange={formik.handleChange}
                className={styles.search}
            />
            <button type='submit' className={styles.button}><Icon size={0.8} path={mdiMagnify} /></button>
        </form>
    );
}

export default SearchForm;
