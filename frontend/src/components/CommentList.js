import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = (props) => {
  const { comments, match, voteHandler } = props;

  return (
    <ul>
      {comments.map((comment) => (
        <li key={ comment.id } className="comment">
          <Comment comment={ comment }
            match={ match }
            voteHandler={ voteHandler }/>
        </li>
      ))}
    </ul>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentList;
