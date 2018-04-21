import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddPost from '../components/AddPost';
import { connect } from 'react-redux';
import { FetchAllPosts, FetchCategoryPosts } from '../actions';


class AddPostLogic extends Component {

	constructor(props) {
		super(props);

		this.state = {
      post: {}
		};
	}

  handlePostDispatch = ( categoryId ) => {
    if (categoryId) {
      console.log(categoryId);
    }
  }
  
  handlePostSubmit = (e) => {
    e.preventDefault();

    // Generate uuid, timestamp, category, initialDeleteFlag. and voteScore
  }

  componentWillMount() {
    const { categoryId } = this.props.match.params;
  }

	componentWillReceiveProps(nextProps) {
	}
  
	render() {
		return <AddPost />;
	}
}

AddPostLogic.propTypes = {
	post: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => {
  const post = state.postHandler;

  return { post };
};

export default connect(mapStateToProps)(AddPostLogic);
