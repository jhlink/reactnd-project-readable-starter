import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentForm from '../components/CommentForm';
import { connect } from 'react-redux';
import { CreateNewComment, PutComment, FetchComment } from '../actions';
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
      type: '',
      shouldRedirect: false
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
    const rootPostPath = '/' + this.props.match.params.category + '/' + this.props.match.params.parentId;

    switch (this.state.type) {
      case TYPE_EDIT: {
        const commentEditedText = {
          timestamp: Date.now(),
          body: this.state.comment.body
        };

        console.log(this.state.comment.id);

        this.props.dispatch(PutComment(this.state.comment.id, commentEditedText, () => {
          this.props.history.push(rootPostPath);
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
          this.props.history.push(rootPostPath);
        }));
      }
    }
  }

  componentWillMount() {
    const isEditPost = this.props.match.url.includes(TYPE_EDIT) ? TYPE_EDIT : TYPE_ADD;
    const nextCommentId = this.props.match.params.commentId;
    const { category, parentId } = this.props.match.params;

    switch (isEditPost) {
      case TYPE_EDIT:{
        this.props.dispatch(FetchComment(nextCommentId));
        this.setState({
          type: isEditPost,
          category,
          parentId
        });
        break;
      }

      case TYPE_ADD:
      default: {
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
    const isEditPost = nextProps.match.path.includes(TYPE_EDIT) ? TYPE_EDIT : TYPE_ADD;

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
        const nextCommentIdCom = nextProps.comment.id;
        if (this.props.comment.id === nextCommentIdCom 
          &&  nextCommentIdCom !== nextCommentId) {
          this.props.dispatch(FetchComment(nextCommentId));
        }

        this.setState({ 
          comment: nextProps.comment,
          type: isEditPost,
          shouldRedirect: nextProps.shouldRedirect
        });

        break;
      }

      default: 
    }
  }
  
  render() {
    const { comment, type, shouldRedirect } = this.state;
    return <CommentForm 
      handleCommentSubmit={(e) => this.handleCommentSubmit(e) }
      handleCommentChange={(e) => this.handleCommentChange(e) }
      comment={ comment }
      type={ type }
      shouldRedirect={ shouldRedirect }/>;
  }
}

CommentFormLogic.propTypes = {
  comment: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  shouldRedirect: PropTypes.bool
};

const mapStateToProps = (state) => {
  const { comment, shouldRedirect } = state.commentHandler;
  return { comment, shouldRedirect };
};

export default connect(mapStateToProps)(CommentFormLogic);
