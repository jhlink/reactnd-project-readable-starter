import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostCount from '../components/PostCount';
import { GetCommentCount } from '../actions';

class PostCommentCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentCount: 0
    };
  }

  handleCommentDispatch = ( postId ) => {
    if (postId) {
      this.props.dispatch(GetCommentCount(postId));
    }
  }

  componentWillMount() {
    const { postId } = this.props;
    this.handleCommentDispatch(postId);
  }

  componentWillReceiveProps(nextProps) {
    const { postId } = this.props;
    const { parentId, count } = nextProps;

    if (postId === parentId) {
      this.setState({ commentCount: count });
    }
  }
  
  render() {
    const { commentCount } = this.state;

    return <PostCount count={ commentCount } />;
  }
}

PostCommentCounter.propTypes = {
  postId: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  const { parentId, count } = state.commentHandler;
    
  return { parentId, count };
};

export default connect(mapStateToProps)(PostCommentCounter);
