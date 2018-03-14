import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

class PostList extends Component {
  
	render() {
		const { posts } = this.props;

		return (
			<ul className="column content">
				{posts.map((post) => (
					<li key={post.id} className="post">
						<Post post={ post }/>
					</li>
				))}
			</ul>
		);
	}
};

PostList.propTypes = {
	posts: PropTypes.array.isRequired
};


export default PostList;
