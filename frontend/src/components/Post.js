import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Post = (props) => {
	const { id, timestamp, title, body, author, category, voteScore, deleted } = props.post;

	return (
		<div>
			<h2> { category } </h2>
			<h3>{ title } by {author }</h3>
			<p> { body } </p>  
			<div> { voteScore } </div>
		</div>
	);
};

Post.propTypes = {
	post: PropTypes.object.isRequired
};

export default Post;
