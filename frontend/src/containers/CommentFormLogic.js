import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentForm from '../components/CommentForm';
import { connect } from 'react-redux';
//import { PutPost, FetchPost, CreateNewPost } from '../actions';
import { CreateNewComment, PutComment } from '../actions';
//import serializeForm from 'form-serialize';
import uuidv4 from 'uuid/v4';
import update from 'immutability-helper';

class CommentFormLogic extends Component {

  constructor(props) {
    super(props);

    this.state = {
      comment: {
        deleted: false,
        parentDeleted: false,
        voteScore: 1,
        category: '',
        body: '',
        author: '',
        parentId: ''
      },
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
      case 'editcomment': {
        const commentEditedText = {
          timestamp: Date.now(),
          body: this.state.comment.body
        };
            
        this.props.dispatch(PutComment(this.state.comment.id, commentEditedText, () => {
          this.props.history.push('/' + this.state.comment.category + '/' + this.state.comment.id);
        }));
        break;
      }

      case 'addcomment':
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
    const isEditPost = this.props.match.url.includes('editcomment') ? 'editcomment' : 'addcomment';
    this.setState({type: isEditPost});
    console.log(this.props.comment);

    switch (isEditPost) {
      case 'editcomment':
        if (this.props.comment !== undefined) {
          console.log(this.props.comment);
          this.setState(
            { comment: 
              this.props.comment,
            }
          );
        }
        break;

      case 'addcomment':
      default: {
        const { category, parentId } = this.props.match.params;
        this.setState({ 
          comment: {
            ...this.state.comment,
            category,
            parentId
          }
        });
      }
    }
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.match !== undefined) {
      const isEditPost = nextProps.match.url.includes('editcomment') ? 'editcomment' : 'addcomment';
      if (this.state.type !== isEditPost) {
        this.setState({type: isEditPost});
      }
    }
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
