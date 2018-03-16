import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostList from '../components/PostList';
import { connect } from 'react-redux';

class PostListLogic extends Component {
	/* TODO: Ask how if this is what production code looks like
   *        and if components are initialized with props with lifecycle methods
   */
	constructor(props) {
		super(props);

		this.state = {
			posts: []
		};
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		this.setState( 
			nextProps
		);
	}
  
	render() {
		const { posts } = this.state;
		return <PostList posts={ posts }/>;
	}
}

PostListLogic.propTypes = {
	posts: PropTypes.array.isRequired
};

const mapStateToProps = (state, props) => {
	let filteredState = { posts : props.posts };
	if (state.selectedCategoryId) {
		filteredState['posts'] = filteredState['posts'].filter((post) => post.category === state.selectedCategoryId);
	} 
  
	return filteredState;
};

export default connect(mapStateToProps)(PostListLogic);
