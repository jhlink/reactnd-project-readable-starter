import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const CommentForm = (props) => {
  const { comment,
    type,
    handleCommentSubmit, 
    handleCommentChange,
    shouldRedirect
  } = props;

  const {
    category,
    author, 
    body 
  } = comment;  

  const TYPE_EDIT = 'editcomment';
  const isEditForm = type === TYPE_EDIT;
  const typeHeader = isEditForm ? 'edit' : 'add';  

  return (
    <div className="main-body">
      { shouldRedirect && (
        <Redirect from="*" to="/404"/>
      )}
      <h2 className="uppercase">{ typeHeader } Comment about { category } Category</h2>
      <form className="form-style" onSubmit={ handleCommentSubmit }>
        <input type="text" 
          name="author" 
          placeholder="Who are you?" 
          value={ author } 
          disabled={ isEditForm ? 'disabled' : '' }
          onChange={e => (
            handleCommentChange(e))}  />
        <textarea type="text" 
          name="body" 
          placeholder="Enter text here..." 
          value={ body } 
          onChange={e => (
            handleCommentChange(e))} />
        <button>Submit</button>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  comment: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  shouldRedirect: PropTypes.bool,
  handleCommentSubmit: PropTypes.func.isRequired,
  handleCommentChange: PropTypes.func.isRequired
};

export default CommentForm;
