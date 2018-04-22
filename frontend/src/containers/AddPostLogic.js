import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddPost from '../components/AddPost';
import { connect } from 'react-redux';
import { FetchAllPosts, FetchCategoryPosts } from '../actions';
import serializeForm from 'form-serialize';

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

    const values = serializeForm(e.target, { hash: true });
    const newValues = {
      ...values,
      id: "test",
      timestamp: 234235235,
      category: "catID",
      initialDeleteFlag: false,
      voteScore: 1
      };
    console.log(newValues);
  }

  componentWillMount() {
    const { categoryId } = this.props.match.params;
  }

	componentWillReceiveProps(nextProps) {
	}
  
	render() {
		return <AddPost handlePostSubmit={(e) => this.handlePostSubmit(e) }/>;
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
