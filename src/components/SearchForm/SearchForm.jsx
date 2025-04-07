import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { mdiMagnify } from '@mdi/js';
import Icon from '@mdi/react';

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
        <form onSubmit={formik.handleSubmit}>
            <input
                type="search"
                name='q'
                placeholder='search posts...'
                value={formik.values.q}
                onChange={formik.handleChange}
            />
            <button type='submit'><Icon size={0.5} path={mdiMagnify} /></button>
        </form>
    );
}

export default SearchForm;
