import React from 'react';
import PropTypes from 'prop-types';

const CommentForm = (props) => {
  const { comment,
    type,
    handleCommentSubmit, 
    handleCommentChange 
  } = props;

  const {
    category,
    author, 
    body 
  } = comment;  

  return (
    <div className="column content">
      <h2 className="uppercase">{ type } Comment about { category } Category</h2>
      <form className="addPostForm" onSubmit={ handleCommentSubmit }>
        <input type="text" 
          name="author" 
          placeholder="Who are you?" 
          value={ author } 
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
  handleCommentSubmit: PropTypes.func.isRequired,
  handleCommentChange: PropTypes.func.isRequired
};

export default CommentForm;
