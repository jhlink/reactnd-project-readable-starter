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


  componentDidMount() {
    const { count } = this.props;
    if (count !== undefined) {
      this.setState({ commentCount: count });
    }
  }

  componentWillReceiveProps(nextProps) {
    const {  count } = nextProps;

    if (count !== undefined) {
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

const mapStateToProps = (state, props) => {
  const { counts } = state.commentHandler;
  const { postId } = props;

  if (counts !== undefined) {
    const count = counts[postId];
    return { count };
  } else {
    return {  };
  }

};

export default connect(mapStateToProps)(PostCommentCounter);
