import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Post from '../components/Post';
import { FetchPost, FetchPostComments } from '../actions';

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

  isObjectEmpty = ( obj ) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }

  handlePostDispatch = ( postId ) => {
    if (this.isObjectEmpty(this.state.post)) {
      this.props.dispatch(FetchPost(postId));
    }
  }

  componentWillMount() {
    const { postId } = this.props.match.params;
    this.handleCommentsDispatch(postId);
    this.handlePostDispatch(postId);
  }

	componentWillReceiveProps(nextProps) {
    const { postId } = this.props.match.params;
    const newPostId = nextProps.match.params.postId;

    if (postId !== newPostId) {
      this.handleCommentsDispatch(newPostId);
    }

    if (nextProps.post) {
      console.log("next props: " + nextProps.post);
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
    const { match, location } = this.props;
		return <Post post={ post } comments={ comments } match={ match } location={ location }/>;
	}
}

PostDetailViewLogic.propTypes = {
	post: PropTypes.object,
	comments: PropTypes.array
};

const mapStateToProps = (state, props) => {
  const { comments } = state.commentHandler;
  const { posts, post } = state.postHandler;
  const { postId } = props.match.params;
  //const targetPost = posts ? posts.filter( targetPost => targetPost.id === postId)[0] : {};
  const fpost = posts ? posts.filter( post => post.id === postId)[0] : {}; 
  const tpost = post ? post : fpost;

  console.log(tpost);
  return { post:tpost, comments } 
};

export default connect(mapStateToProps)(PostDetailViewLogic);
