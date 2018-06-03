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
    const { postId } = this.props.match.params;
    this.handleCommentDispatch(postId); 
  }

  componentWillReceiveProps(nextProps) {
    const { postId } = this.props.match.params;
    const { commentCount } = this.state;
    const { parentId, count  } = nextProps;

    console.log(nextProps);
    if (postId === parentId && commentCount !== count ) {
      this.setState({ commentCount: count });
    }
  }
  
  render() {
    const { commentCount } = this.state;

    return <PostCount count={ commentCount } />;
  }
}

PostCommentCounter.propTypes = {
  postId: PropTypes.string
};

const mapStateToProps = (state) => {
  const { parentId, comments } = state.commentHandler;
    
  const nCount = comments !== undefined ? comments.length : 0;    

  return { parentId, count: nCount };
};

export default connect(mapStateToProps)(PostCommentCounter);
