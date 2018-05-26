import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostForm from '../components/PostForm';
import { connect } from 'react-redux';
import { PutPost, FetchPost, CreateNewPost } from '../actions';
import serializeForm from 'form-serialize';
import uuidv4 from 'uuid/v4';
import update from 'immutability-helper';

class PostFormLogic extends Component {

  constructor(props) {
    super(props);

    this.state = {
      post: {
        deleted: false,
        voteScore: 1,
        category: '',
        title: '',
        body: '',
        author: ''
      },
      type: ''
    };
  }

  handleSectionPostUpdate = ( property, value ) => {
    const postKey = property;
    this.setState({
      post: 
      update(this.state.post, 
        { [postKey]: { 
          $set: value
        }
        }
      )} 
    );
  }

  handlePostChange = (e) => {
    this.handleSectionPostUpdate(e.target.name, e.target.value);
  }
  
  handlePostSubmit = (e) => {
    e.preventDefault();

    switch (this.state.type) {
      case 'edit':
        const postEditedText = {
          title: this.state.post.title,
          body: this.state.post.body
        };
        
        this.props.dispatch(PutPost(this.state.post.id, postEditedText, () => {
          this.props.history.push('/' + this.state.post.category + '/' + this.state.post.id);
        }));

        break;

      case 'add':
      default:
        const newPostData = {
          ...this.state.post,
          id: uuidv4(),
          timestamp: Date.now()
        };

        this.props.dispatch(CreateNewPost(newPostData, () => {
          this.props.history.push('/' + this.state.post.category);
        }));
    }
  }

  componentWillMount() {
    const isEditPost = this.props.match.url.includes('editpost') ? 'edit' : 'add';
    this.setState({type: isEditPost});

  
    switch (isEditPost) {
      case 'edit':
        if (this.props.post !== undefined) {
          this.setState(
            { post: this.props.post }
          );
        }
        break;

      case 'add':
      default:
        const { categoryId } = this.props.match.params;
        this.handleSectionPostUpdate('category', categoryId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.post === undefined) {
      return;
    }

    if (this.state.post.id === undefined || this.state.post.id !== nextProps.post.id) {
      this.setState(
        { post: nextProps.post }
      );
    }
  }
  
  render() {
    const { post, type } = this.state;
    return <PostForm handlePostSubmit={(e) => this.handlePostSubmit(e) }
      handlePostChange={(e) => this.handlePostChange(e) }
      post={ post }
      type={ type }/>;
  }
}

PostFormLogic.propTypes = {
  post: PropTypes.object
};

const mapStateToProps = (state) => {
  const { post } = state.postHandler;
  return { post };
};

export default connect(mapStateToProps)(PostFormLogic);
