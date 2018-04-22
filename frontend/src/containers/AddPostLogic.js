import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddPost from '../components/AddPost';
import { connect } from 'react-redux';
import { CreateNewPost } from '../actions';
import serializeForm from 'form-serialize';
import uuidv4 from "uuid/v4";

class AddPostLogic extends Component {

	constructor(props) {
		super(props);

		this.state = {
        deleted: false,
        voteScore: 1,
        category: ""
		};
	}

  handlePostDispatch = ( categoryId ) => {
    if (categoryId) {
      console.log(categoryId);
    }
  }
  
  handlePostSubmit = (e) => {
    e.preventDefault();

    const userInputs = serializeForm(e.target, { hash: true });
    const newPostData = {
      ...userInputs,
      category: this.state.category,
      id: uuidv4(),
      timestamp: Date.now()
    };

    this.props.dispatch(CreateNewPost(newPostData));
  }

  componentWillMount() {
    const { categoryId } = this.props.match.params;
    this.setState({ 
      category: categoryId,
    });
  }

	componentWillReceiveProps(nextProps) {
	}
  
	render() {
    const { category } = this.state;
		return <AddPost handlePostSubmit={(e) => this.handlePostSubmit(e) }
                    categoryId={ category }/>;
	}
}

AddPostLogic.propTypes = {
	//post: PropTypes.object.isRequired
};

export default connect()(AddPostLogic);
