import React from 'react';
import PropTypes from 'prop-types';

const Comment = (props) => { 
	console.log(props.comment);
  
	const { id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted } = props.comment;
  const hideFromDelete = parentDeleted || deleted;
  const formattedDated = new Date(timestamp).toLocaleString();

	return (
		<div display={ hideFromDelete } className="comment content">
			<p className="commentBody"> { body } </p>  
      <h3 className="commentAuthor"> by {author } - { formattedDated } </h3>
			<div className="commentVoteScore"> Vote Score:  { voteScore } </div>
		</div>
	);
};

Comment.propTypes = {
	comment: PropTypes.object.isRequired
};


export default Comment;
