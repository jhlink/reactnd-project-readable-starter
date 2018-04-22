import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddPost from '../components/AddPost';
import { connect } from 'react-redux';
import { FetchAllPosts, FetchCategoryPosts } from '../actions';
import serializeForm from 'form-serialize';
import uuidv4 from "uuid/v4";

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
      id: uuidv4(),
      timestamp: Date.now(),
      category: "catID",
      initialDeleteFlag: false,
      voteScore: 1
      };
    console.log(newValues);
  }

  componentWillMount() {
    const { categoryId } = this.props.match.params;
    this.setState({ post: {
      category: categoryId
    }});
  }

	componentWillReceiveProps(nextProps) {
	}
  
	render() {
    const { category } = this.state.post;
		return <AddPost handlePostSubmit={(e) => this.handlePostSubmit(e) }
                    categoryId={ category }/>;
	}
}

AddPostLogic.propTypes = {
	//post: PropTypes.object.isRequired
};

export default connect()(AddPostLogic);
