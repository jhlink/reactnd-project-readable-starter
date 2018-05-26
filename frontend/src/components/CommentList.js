import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = (props) => {
  const { comments, positionStyle } = props;

  return (
    <ul className="comments" style={ positionStyle }>
      {comments.map((comment) => (
        <li key={comment.id} className="comment">
          <Comment comment={ comment }/>
        </li>
      ))}
    </ul>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentList;
