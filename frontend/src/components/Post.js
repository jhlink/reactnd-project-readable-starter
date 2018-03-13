import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Post extends Component {
	componentWillReceiveProps(nextProps) {
		console.log(nextProps);  
	}

	render() {
  
		const { id, timestamp, title, body, author, category, voteScore, deleted } = this.props;

		return (
			<div className=".post">
				<h2> { category } </h2>
				<h3>{ title } by {author }</h3>
				<p> { body } </p>  
				<div> { voteScore } </div>
			</div>
		);
	}
};

Post.propTypes = {
	id: PropTypes.string.isRequired,
	timestamp: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	voteScore: PropTypes.number.isRequired,
	deleted: PropTypes.bool.isRequired
};


export default Post;
