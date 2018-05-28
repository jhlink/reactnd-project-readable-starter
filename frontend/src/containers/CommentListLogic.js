import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CommentList from '../components/CommentList';
import { FetchPostComments, PostVote } from '../actions';
import _ from 'lodash';

class CommentListLogic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      formSortCriteria: { 
        criteria: 'voteScore',
        order: 'desc'
      } 
    };
    this.handleVote = this.handleVote.bind(this);
    this.handleSelectedSort = this.handleSelectedSort.bind(this);
  }

 handleCommentsDispatch = ( postId ) => {
   if (postId) {
     this.props.dispatch(FetchPostComments(postId));
   }
 }

  handleVote = (commentId, e) => {
    e.preventDefault();
    const voteType = { option: e.target.id };
    this.props.dispatch(PostVote(commentId, voteType));
  }

  handleSelectedSort = ( e ) => {
    e.preventDefault();
    const sortCrit = JSON.parse(e.target.value);
    this.setState({ formSortCriteria: sortCrit });
  }

  commentSorter = (comments) => {
    const ncomments = _.orderBy(comments, 
      this.state.formSortCriteria.criteria, 
      this.state.formSortCriteria.order);
    return ncomments;
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
    const sorted = this.commentSorter(comments);
    const sortValues = { 
      formSortCriteria: this.state.formSortCriteria, 
      sortHandler: this.handleSelectedSort 
    };

    return <CommentList 
      comments={ comments } 
      voteHandler={ this.handleVote }
      sortValues={ sortValues }/>;
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
