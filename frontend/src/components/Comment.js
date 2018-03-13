import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {

	render() {
		console.log(this.props.comment);
  
		const { id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted } = this.props.comment;

		return (
			<div>
				<p> { body } -- { author } </p>  
				<div> { voteScore } </div>
			</div>
		);
	}
};

Comment.propTypes = {
	comment: PropTypes.object.isRequired
};


export default Comment;
