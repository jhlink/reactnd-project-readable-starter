import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = (props) => {
	const { posts } = props;

	return (
		<ul>
			{posts.map((post) => {
				<li key={post.id}>
					<Post post={ post }/>
				</li>;
			})}
		</ul>
	);
};

PostList.propTypes = {
	posts: PropTypes.array.isRequired
};


export default PostList;
