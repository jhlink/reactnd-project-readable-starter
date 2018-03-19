import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ( props ) =>  {
	const { posts } = props; 

	return (
    <div className="column content">
		  <ul>
		  	{posts.map((post) => (
		  		<li key={post.id} className="post">
		  			<Post post={ post }/>
		  		</li>
		  	))}
		  </ul>
    </div>
	);
};

PostList.propTypes = {
	posts: PropTypes.array.isRequired
};

export default PostList;
