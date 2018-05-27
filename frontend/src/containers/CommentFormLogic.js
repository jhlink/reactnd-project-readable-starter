import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentForm from '../components/CommentForm';
import { connect } from 'react-redux';
//import { PutPost, FetchPost, CreateNewPost } from '../actions';
import { CreateNewComment, PutComment, FetchComment } from '../actions';
//import serializeForm from 'form-serialize';
import uuidv4 from 'uuid/v4';
import update from 'immutability-helper';

const TYPE_EDIT = 'editcomment';
const TYPE_ADD = 'addcomment';
const INIT_COMMENT_STATE = {
  deleted: false,
  parentDeleted: false,
  voteScore: 1,
  category: '',
  body: '',
  author: '',
  parentId: '',
  id: ''
};

class CommentFormLogic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: INIT_COMMENT_STATE,
      type: ''
    };
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
      case TYPE_EDIT: {
        const commentEditedText = {
          timestamp: Date.now(),
          body: this.state.comment.body
        };
            
        this.props.dispatch(PutComment(this.state.comment.id, commentEditedText, () => {
          this.props.history.push('/' + this.state.comment.category + '/' + this.state.comment.id);
        }));
        break;
      }

      case TYPE_ADD:
      default: {
        const newCommentData = {
          ...this.state.comment,
          id: uuidv4(),
          timestamp: Date.now()
        };

        this.props.dispatch(CreateNewComment(newCommentData, () => {
          const rootPostPath = '/' + this.props.match.params.category + '/' + this.props.match.params.parentId;
          this.props.history.push(rootPostPath);
        }));
      }
    }
  }

  componentWillMount() {
    const isEditPost = this.props.match.url.includes(TYPE_EDIT) ? TYPE_EDIT : TYPE_ADD;

    switch (isEditPost) {
      case TYPE_EDIT:{
        const nextCommentId = this.props.match.params.commentId;
        this.props.dispatch(FetchComment(nextCommentId));
        this.setState({
          type: isEditPost
        });
        break;
      }

      case TYPE_ADD:
      default: {
        const { category, parentId } = this.props.match.params;
        this.setState({ 
          comment: {
            ...this.state.comment,
            category,
            parentId
          },
          type: isEditPost
        });
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const isEditPost = nextProps.match.url.includes(TYPE_EDIT) ? TYPE_EDIT : TYPE_ADD;

    switch (isEditPost) {
      case TYPE_ADD: {
        this.setState({
          comment: INIT_COMMENT_STATE,
          type: isEditPost
        });
        break;
      }

      case TYPE_EDIT: {
        const nextCommentId = nextProps.match.params.commentId;
        if (this.props.comment === undefined) {
          this.props.dispatch(FetchComment(nextCommentId));
          return;
        }         
        
        this.setState({ 
          comment: nextProps.comment,
          type: isEditPost
        });

        if (this.state.comment.id !== nextCommentId) {
          this.handleSectionCommentUpdate('id', nextCommentId);
          this.props.dispatch(FetchComment(nextCommentId));
        }
        break;
      }

      default: 
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
