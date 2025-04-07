import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CONSTANTS from './../constants';
import TagsList from "../components/TagsList/TagsList";
import TagPosts from './../components/TagPosts/TagPosts';
import Pagination from './../components/Pagination/Pagination';
import styles from './pages.module.scss';

const TagPage = () => {
    const { tagName } = useParams();
    const [page, setPage] = useState(1);
    const limitPosts = CONSTANTS.LIMITS_POSTS.at(2);
    const skip = (page - 1) * limitPosts;
    const { total } = useSelector((state) => state.posts);
    useEffect(() => {
        setPage(1);
    }, [tagName]);
    return (
        <div className={styles.wrapper}>
            <h1>{tagName}</h1>
            <div className={styles.container}>
                <section>
                    <TagPosts tagName={tagName} limit={limitPosts} skip={skip}/>
                    {total > limitPosts && <Pagination page={page} setPage={setPage} limit={limitPosts} total={total} />}
                </section>
                <section>
                    <TagsList />
                </section>
            </div>
        </div>
    );
}

export default TagPage;
