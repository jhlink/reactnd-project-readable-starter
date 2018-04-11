import React from 'react';
import PropTypes from 'prop-types';

const Post = (props) => {
	const { timestamp, title, body, author, category, voteScore, deleted } = props.post;
	const hideFromDelete = deleted ? 'none' : 'block';
	const formattedDated = new Date(timestamp).toLocaleString();

	return (
		<div display={ hideFromDelete }>
			<h2 className="postHeader"> { title } </h2>
      <h3 className="postSubheader"> by {author } - { formattedDated } </h3>
			<p className="postBody"> { body } </p>  
			<div className="postVoteScore"> Vote Score:  { voteScore } </div>
		</div>
	);
};

Post.propTypes = {
	post: PropTypes.object.isRequired
};

export default Post;
