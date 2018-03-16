import React from 'react';
import PropTypes from 'prop-types';

const Post = (props) => {
	const {  timestamp, title, body, author, category, voteScore, deleted } = props.post;
	const hideFromDelete = deleted ? 'none' : 'block';
	const formattedDated = new Date(timestamp).toLocaleString();

	return (
		<div display={ hideFromDelete }>
			<h2> { category } </h2>
			<h3>{ title } by {author }, posted @ { formattedDated }</h3>
			<p> { body } </p>  
			<div> { voteScore } </div>
		</div>
	);
};

Post.propTypes = {
	post: PropTypes.object.isRequired
};

export default Post;
