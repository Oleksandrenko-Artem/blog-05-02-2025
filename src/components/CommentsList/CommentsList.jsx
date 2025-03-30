import { mdiThumbUp } from '@mdi/js';
import Icon from '@mdi/react';
import PropTypes from 'prop-types';
import styles from './CommentsList.module.scss';

const CommentsList = (props) => {
    const { comments } = props;
    const showComment = (comment) => <div className={styles.comment} key={comments.id}>
        <h3>{comment.user.fullName}: </h3> {comment.body}
        <div className={styles['comment-likes']}>
            <Icon size={1} path={mdiThumbUp} />
            {comment.likes}
        </div>
    </div>
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