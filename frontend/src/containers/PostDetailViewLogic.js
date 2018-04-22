import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Post from '../components/Post';
import { FetchPostComments } from '../actions';

class PostDetailViewLogic extends Component {
	/* TODO: Ask how if this is what production code looks like
   *        and if components are initialized with props with lifecycle methods
   */
	constructor(props) {
		super(props);

		this.state = {
      post: {},
			comments: []
		};
	}

  handleCommentsDispatch = ( postId ) => {
    if (postId) {
      this.props.dispatch(FetchPostComments(postId));
    }
  }

  componentWillMount() {
    const { postId } = this.props.match.params;
    this.handleCommentsDispatch(postId);
  }

	componentWillReceiveProps(nextProps) {
    const { postId } = this.props.match.params;
    const newPostId = nextProps.match.params.postId;

    if (postId !== newPostId) {
      this.handleCommentsDispatch(newPostId);
    }

    if (nextProps.post) {
      console.log(nextProps.post);
      this.setState(
        { post: nextProps.post }
      );
    }

    if (nextProps.comments && nextProps.comments.length > 0) {
      console.log(nextProps.comments);
      this.setState(
        {comments: nextProps.comments}
      );
    }
	}
  
	render() {
		const { post, comments } = this.state;
		return <Post post={ post } comments={ comments }/>;
	}
}

PostDetailViewLogic.propTypes = {
	post: PropTypes.object,
	comments: PropTypes.array
};

const mapStateToProps = (state, props) => {
  const { comments } = state.commentHandler;
  const { posts } = state.postHandler;
  const { postId } = props.match.params;
  const post = posts ? posts.filter( post => post.id === postId)[0] : {};

  return { post, comments } 
};

export default connect(mapStateToProps)(PostDetailViewLogic);
