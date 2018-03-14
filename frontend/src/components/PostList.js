import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import { connect } from 'react-redux';

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

const mapStateToProps = (state, props) => {
	let filteredState = { posts : props.posts };
	if (state.selectedCategoryId) {
		filteredState['posts'] = filteredState['posts'].filter((post) => post.category === state.selectedCategoryId);
	} 
  
	return filteredState;
};

export default connect(mapStateToProps)(PostList);
