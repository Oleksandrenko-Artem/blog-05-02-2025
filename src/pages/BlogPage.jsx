import { useState } from 'react';
import CONSTANTS from '../constants';
import Pagination from './../components/Pagination/Pagination';
import PostsList from "../components/PostsList/PostsList";
import FeaturedPost from './../components/FeaturedPost/FeaturedPost';

const BlogPage = () => {
    const [page, setPage] = useState(1);
    const limitPosts = CONSTANTS.LIMITS_POSTS.at(2);
    const skip = (page - 1) * limitPosts;
    return (
        <>
            <section>
                <FeaturedPost imgPosition='right' />
            </section>
            <div>
            <h1>Blog</h1>
            <PostsList withPic limit={limitPosts} skip={skip} />
            <Pagination page={page} setPage={setPage} />
            </div>
        </>
    );
}

export default BlogPage;
