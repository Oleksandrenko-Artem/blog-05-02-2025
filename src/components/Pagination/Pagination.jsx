import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import PropTypes from 'prop-types';
import styles from './Pagination.module.scss';

const Pagination = (props) => {
    const { page, setPage } = props;
    const setPrewPage = () => {
        if (page > 1){setPage((prev) => prev - 1)}
    };
    const setNextPage = () => { 
        if (page < 100){setPage((prev) => prev + 1)}
    };
    return (
        <div className={styles.pagination}>
            <span onClick={setPrewPage}><Icon size={2} path={mdiChevronLeft} /></span>
            <span className={styles.page}>{page}</span>
            <span onClick={setNextPage}><Icon size={2} path={mdiChevronRight} /></span>
        </div>
    );
};


Pagination.propTypes = {
    page: PropTypes.number,
    setPage: PropTypes.func,
};


export default Pagination;
