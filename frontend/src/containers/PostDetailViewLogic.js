import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Post from '../components/Post';
import { FetchPost, SendVoteForPost, DeletePost } from '../actions';

class PostDetailViewLogic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
      shouldRedirect: false
    };

    this.handleVote = this.handleVote.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }


  isObjectEmpty = ( obj ) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }

  handlePostDispatch = ( postId ) => {
    if (this.isObjectEmpty(this.state.post)) {
      this.props.dispatch(FetchPost(postId));
    }
  }

  handleVote = (postId, e) => {
    e.preventDefault();
    const voteType = { option: e.target.id };
    this.props.dispatch(SendVoteForPost(postId, voteType));
  }

  handleDelete = (e) => {
    e.preventDefault();
    this.props.dispatch(DeletePost(this.state.post.id, () => {
      this.props.history.push('/' + this.state.post.category);
    }));
  }

  componentWillMount() {
    const { postId } = this.props.match.params;
    this.handlePostDispatch(postId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.post) {
      this.setState(
        { post: nextProps.post,
          shouldRedirect: nextProps.shouldRedirect }
      );
    }
  }
  
  render() {
    const { post, shouldRedirect } = this.state;
    const { match, location } = this.props;
    return <Post 
      post={ post } 
      voteHandler={ this.handleVote }
      deleteHandler={ this.handleDelete }
      shouldRedirect={ shouldRedirect }
      match={ match } 
      location={ location }/>;
  }
}

PostDetailViewLogic.propTypes = {
  post: PropTypes.object,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  shouldRedirect: PropTypes.bool
};

const mapStateToProps = (state) => {
  const { post, shouldRedirect } = state.postHandler;

  return { post, shouldRedirect }; 
};

export default connect(mapStateToProps)(PostDetailViewLogic);
