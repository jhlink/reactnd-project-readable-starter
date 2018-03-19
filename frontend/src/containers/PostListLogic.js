import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostList from '../components/PostList';
import { FetchAllPosts } from '../actions';


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

  componentWillMount() {
    const { categoryId } = this.props.match.params;
    if (!categoryId) {
      this.props.dispatch(FetchAllPosts());
    } 
  }

	componentWillReceiveProps(nextProps) {
		this.setState( 
			nextProps.posts
		);
	}
  
	render() {
		const { posts } = this.state;
		return <PostList posts={ posts }/>;
	}
}

PostListLogic.propTypes = {
	posts: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => {
  const { selectedCategoryId, postHandler } = state;
  const posts = postHandler;

  if (!selectedCategoryId) {
    return { posts };
  }

  return { posts };
};

export default connect(mapStateToProps)(PostListLogic);
