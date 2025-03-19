import PropTypes from 'prop-types';

const CommentsList = (props) => {
    const { comments } = props;
    const showComment = (comment) => <li key={comments.id}>{comment.body} (by {comment.user.fullName})</li>
    return (
        <ul>
            {comments.map(showComment)}
        </ul>
    );
};

CommentsList.propTypes = {
    comments: PropTypes.array
};

export default CommentsList;