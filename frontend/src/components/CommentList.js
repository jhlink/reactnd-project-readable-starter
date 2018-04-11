import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = (props) => {
	const { comments } = props;

	return (
		<ul className="column content">
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
