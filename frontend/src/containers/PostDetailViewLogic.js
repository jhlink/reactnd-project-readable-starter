import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Post from '../components/Post';
import { FetchPost, SendVoteForPost, DeletePost } from '../actions';

class PostDetailViewLogic extends Component {
  /* TODO: Ask how if this is what production code looks like
   *        and if components are initialized with props with lifecycle methods
   */
  constructor(props) {
    super(props);

    this.state = {
      post: {}
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
    this.props.dispatch(DeletePost(this.state.post.id));
  }

  componentWillMount() {
    const { postId } = this.props.match.params;
    this.handlePostDispatch(postId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.post) {
      this.setState(
        { post: nextProps.post }
      );
    }
  }
  
  render() {
    const { post } = this.state;
    const { match, location } = this.props;
    return <Post 
      post={ post } 
      voteHandler={ this.handleVote }
      deleteHandler={ this.handleDelete }
      match={ match } 
      location={ location }/>;
  }
}

PostDetailViewLogic.propTypes = {
  post: PropTypes.object
};

const mapStateToProps = (state, props) => {
  const { post } = state.postHandler;

  return { post }; 
};

export default connect(mapStateToProps)(PostDetailViewLogic);
