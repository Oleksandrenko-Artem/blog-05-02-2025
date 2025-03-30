import PostsListByAuthor from '../components/PostsList/PostListByAuthor';
import UserProfile from './../components/UserProfile/UserProfile';

const UserPage = () => {
    return (
        <div>
            <UserProfile />
            <h2>My posts:</h2>
            <PostsListByAuthor />
        </div>
    );
}

export default UserPage;
