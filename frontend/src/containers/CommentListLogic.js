import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CommentList from '../components/CommentList';
import { FetchPostComments, SendVoteForComment, DeleteComment } from '../actions';

class CommentListLogic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
    this.handleVote = this.handleVote.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

 handleCommentsDispatch = ( postId ) => {
   if (postId) {
     this.props.dispatch(FetchPostComments(postId));
   }
 }

  handleVote = (commentId, e) => {
    e.preventDefault();
    const voteType = { option: e.target.id };
    this.props.dispatch(SendVoteForComment(commentId, voteType));
  }

  handleDelete = ( commentId, e ) => {
    e.preventDefault();
    this.props.dispatch(DeleteComment(commentId));
  }

  componentWillReceiveProps(nextProps) {
    const { postId } = this.props;
    const newPostId = nextProps.postId;

    if (postId !== newPostId) {
      this.handleCommentsDispatch(newPostId);
    }

    if (nextProps.comments) {
      this.setState(
        {comments: nextProps.comments}
      );
    }
  }
  
  render() {
    const { comments } = this.state;
    const { match } = this.props;

    return <CommentList 
      comments={ comments } 
      match={ match }
      voteHandler={ this.handleVote }
      deleteHandler={ this.handleDelete }/>;
  }
}

CommentListLogic.propTypes = {
  comments: PropTypes.array,
  postId: PropTypes.string,
  match: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const { comments } = state.commentHandler;
  return { comments };
};

export default connect(mapStateToProps)(CommentListLogic);
