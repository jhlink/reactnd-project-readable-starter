import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostForm from '../components/PostForm';
import { connect } from 'react-redux';
import { CreateNewPost } from '../actions';
import serializeForm from 'form-serialize';
import uuidv4 from "uuid/v4";
import update from 'immutability-helper';

class PostFormLogic extends Component {

	constructor(props) {
		super(props);

		this.state = {
      post: {
        deleted: false,
        voteScore: 1,
        category: "",
        title: "",
        body: "",
        author: ""
     },
     type: ""
		};
	}

  handlePostDispatch = ( categoryId ) => {
    if (categoryId) {
      console.log(categoryId);
    }
  }

  handlePostChange = (e) => {
    this.setState({
      post: 
      update(this.state.post, 
              { [e.target.name]: { 
                  $set: e.target.value
                  }
              }
            )} 
    )
  }
  
  handlePostSubmit = (e) => {
    e.preventDefault();

    //const userInputs = serializeForm(e.target, { hash: true });
    const isEditPost = this.props.match.url.includes("editpost");

    if (isEditPost) {
      
    } else {
      const newPostData = {
        ...this.state.post,
        id: uuidv4(),
        timestamp: Date.now()
      };

      this.props.dispatch(CreateNewPost(newPostData));
    }
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
