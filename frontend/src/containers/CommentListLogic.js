import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CommentList from '../components/CommentList';
import { FetchPostComments, SendVoteForComment } from '../actions';

class CommentListLogic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
    this.handleVote = this.handleVote.bind(this);
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

  componentWillMount() {
    const { postId } = this.props;
    this.handleCommentsDispatch(postId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ 
      comments: nextProps.comments 
    });
  }
  
  render() {
    const { comments } = this.state;
    const { match } = this.props;

    return <CommentList 
      comments={ comments } 
      match={ match }
      voteHandler={ this.handleVote }/>;
  }
}

CommentListLogic.propTypes = {
  comments: PropTypes.array
};

const mapStateToProps = (state) => {
  const { comments } = state.commentsHandler;

  return { comments };
};

export default connect(mapStateToProps)(CommentListLogic);
