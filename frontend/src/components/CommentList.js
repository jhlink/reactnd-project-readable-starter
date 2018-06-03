import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = (props) => {
  const { comments, match, voteHandler, deleteHandler } = props;
  const commentsNotDeleted = comments.filter(comment => !comment.deleted);

  return (
    <ul>
      {commentsNotDeleted.map((comment) => (
        <li key={ comment.id } className="comment">
          <Comment comment={ comment }
            match={ match }
            voteHandler={ voteHandler }
            deleteHandler={ deleteHandler }/>
        </li>
      ))}
    </ul>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  voteHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired
};

export default CommentList;
