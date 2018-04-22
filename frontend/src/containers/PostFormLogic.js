import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostForm from '../components/PostForm';
import { connect } from 'react-redux';
import { CreateNewPost } from '../actions';
import serializeForm from 'form-serialize';
import uuidv4 from "uuid/v4";

class PostFormLogic extends Component {

	constructor(props) {
		super(props);

		this.state = {
        deleted: false,
        voteScore: 1,
        category: "",
        title: "",
        body: "",
        author: ""
		};
	}

  handlePostDispatch = ( categoryId ) => {
    if (categoryId) {
      console.log(categoryId);
    }
  }

  handlePostChange = (e) => {
    this.setState( {[e.target.name]: e.target.value } ); 
  }
  
  handlePostSubmit = (e) => {
    e.preventDefault();

    //const userInputs = serializeForm(e.target, { hash: true });
    const newPostData = {
      ...this.state,
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
    const post = { ...this.state};
		return <PostForm handlePostSubmit={(e) => this.handlePostSubmit(e) }
                     handlePostChange={(e) => this.handlePostChange(e) }
                     post={ post }/>;
	}
}

PostFormLogic.propTypes = {
	//post: PropTypes.object.isRequired
};

export default connect()(PostFormLogic);
