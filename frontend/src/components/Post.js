import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Post extends Component {

	render() {
		console.log(this.props.post);
  
		const { id, timestamp, title, body, author, category, voteScore, deleted } = this.props.post;

		return (
			<div>
				<h2> { category } </h2>
				<h3>{ title } by {author }</h3>
				<p> { body } </p>  
				<div> { voteScore } </div>
			</div>
		);
	}
};

Post.propTypes = {
	post: PropTypes.object.isRequired
};


export default Post;
