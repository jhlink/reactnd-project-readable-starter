import React from 'react';
import PropTypes from 'prop-types';

const Comment = (props) => { 
	console.log(props.comment);
  
	const { id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted } = props.comment;

	return (
		<div>
			<p> { body } -- { author } </p>  
			<div> { voteScore } </div>
		</div>
	);
};

Comment.propTypes = {
	comment: PropTypes.object.isRequired
};


export default Comment;
