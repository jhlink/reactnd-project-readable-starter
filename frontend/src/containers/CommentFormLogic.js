import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentForm from '../components/CommentForm';
import { connect } from 'react-redux';
//import { PutPost, FetchPost, CreateNewPost } from '../actions';
import { CreateNewComment } from '../actions';
//import serializeForm from 'form-serialize';
import uuidv4 from 'uuid/v4';
import update from 'immutability-helper';

class CommentFormLogic extends Component {

  constructor(props) {
    super(props);

    this.state = {
      comment: {
        deleted: false,
        voteScore: 1,
        category: '',
        title: '',
        body: '',
        author: '',
        parentId: ''
      },
      type: ''
    };
  }

  handleCommentDispatch = ( categoryId ) => {
    if (categoryId) {
      console.log(categoryId);
    }
  }

  handleSectionCommentUpdate = ( property, value ) => {
    const commentKey = property;
    this.setState({
      comment: 
      update(this.state.comment, 
        { [commentKey]: { 
          $set: value
        }
        }
      )} 
    );
  }

  handleCommentChange = (e) => {
    this.handleSectionCommentUpdate(e.target.name, e.target.value);
  }
  
  handleCommentSubmit = (e) => {
    e.preventDefault();

    switch (this.state.type) {
      case 'edit': {
      //const postEditedText = {
      //  title: this.state.post.title,
      //  body: this.state.post.body
      //};
      //  const nothing = 'nothing';
            
        //this.props.dispatch(PutPost(this.state.post.id, postEditedText, () => {
        //  this.props.history.push('/' + this.state.post.category + '/' + this.state.post.id);
        //}));
        break;
      }

      case 'addcomment':
      default: {
        const newCommentData = {
          parentId: this.state.parentId,
          body: this.state.body,
          author: this.state.author,
          id: uuidv4(),
          timestamp: Date.now()
        };

        this.props.dispatch(CreateNewComment(newCommentData, () => {
          const rootPostPath = '/' + this.props.match.params.category + '/' + this.props.match.params.postId;
          console.log(rootPostPath);
          //this.props.history.push(rootPostPath);
        }));
      }
    }
  }

  componentDidMount() {
    const isEditPost = 'addcomment'; //this.props.match.url.includes('editpost') ? 'edit' : 'add';
    this.setState({type: isEditPost});

  
    switch (isEditPost) {
      case 'edit':
        if (this.props.comment !== undefined) {
          this.setState(
            { comment: this.props.comment }
          );
        }
        break;

      case 'addcomment':
      default: {
        const { category, parentId } = this.props.match.params;
        this.setState({
          ...this.state.comment,
          category,
          parentId
        });
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.comment === undefined) {
      return;
    }

    if (this.state.comment.id === undefined || this.state.comment.id !== nextProps.comment.id) {
      this.setState(
        { comment: nextProps.comment }
      );
    }
  }
  
  render() {
    const { comment, type } = this.state;
    return <CommentForm 
      handleCommentSubmit={(e) => this.handleCommentSubmit(e) }
      handleCommentChange={(e) => this.handleCommentChange(e) }
      comment={ comment }
      type={ type }/>;
  }
}

CommentFormLogic.propTypes = {
  comment: PropTypes.object
};

const mapStateToProps = (state) => {
  const { comment } = state.commentHandler;
  return { comment };
};

export default connect(mapStateToProps)(CommentFormLogic);
