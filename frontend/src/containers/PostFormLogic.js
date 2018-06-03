import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostForm from '../components/PostForm';
import { connect } from 'react-redux';
import { PutPost, FetchPost, CreateNewPost, FetchCategories } from '../actions';
import uuidv4 from 'uuid/v4';
import update from 'immutability-helper';

const INIT_POST = {
  deleted: false,
  voteScore: 1,
  category: '',
  title: '',
  body: '',
  author: ''
};

class PostFormLogic extends Component {

  constructor(props) {
    super(props);

    this.state = {
      post: INIT_POST,
      type: '',
      categories: []
    };

    this.handleCategorySelect = this.handleCategorySelect.bind(this);
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
      case 'edit': {
        const postEditedText = {
          title: this.state.post.title,
          body: this.state.post.body
        };
        
        this.props.dispatch(PutPost(this.state.post.id, postEditedText, () => {
          this.props.history.push('/' + this.state.post.category + '/' + this.state.post.id);
        }));

        break;
      }

      case 'add':
      default:{
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
  }

  handleCategorySelect = ( e ) => {
    e.preventDefault();
    const selectedCategory  = e.target.value;
    this.handleSectionPostUpdate('category', selectedCategory);
  }

  componentWillMount() {
    const isEditPost = this.props.match.url.includes('editpost') ? 'edit' : 'add';
    const { postId } = this.props.match.params;
    this.setState({type: isEditPost});

    switch (isEditPost) {
      case 'edit':
        this.props.dispatch(FetchPost(postId));
        break;

      case 'add':
      default:
        const { categoryId } = this.props.match.params;
        if (categoryId) {
          this.handleSectionPostUpdate('category', categoryId);
        }
        this.props.dispatch(FetchCategories());
    }
  }
  

  componentWillReceiveProps(nextProps) {
    const { post, categories } = nextProps;

    if (this.state.type === 'edit' && post !== undefined) {
      this.setState({
        post
      });
    }

    if (categories !== undefined) {
      this.setState({
        categories
      });
    }
  }
  
  render() {
    const { categories, post, type } = this.state;
    return <PostForm handlePostSubmit={(e) => this.handlePostSubmit(e) }
      handlePostChange={(e) => this.handlePostChange(e) }
      handleCategorySelect={(e) => this.handleCategorySelect(e) }
      categories={ categories }
      post={ post }
      type={ type }/>;
  }
}

PostFormLogic.propTypes = {
  post: PropTypes.object
};

const mapStateToProps = (state) => {
  const { post } = state.postHandler;
  const { categories } = state.categoryHandler;
  return { post, categories };
};

export default connect(mapStateToProps)(PostFormLogic);
