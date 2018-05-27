import React from 'react';
import PropTypes from 'prop-types';

const PostForm = (props) => {
  const { post,
    type,
    handlePostSubmit, 
    handlePostChange 
  } = props;

  const {
    category,
    title, 
    author, 
    body 
  } = post;  

  const isEditForm = type === 'edit';

  return (
    <div className="main-body">
      <h2 className="uppercase">{ type } Post about { category } Category</h2>
      <form className="addPostForm" onSubmit={ handlePostSubmit }>
        <input type="text" 
          name="title" 
          placeholder="Title" 
          value={ title } 
          onChange={e => (
            handlePostChange(e))} />
        <input type="text" 
          name="author" 
          placeholder="Who are you?" 
          value={ author } 
          disabled={ isEditForm ? 'disabled':'' }
          onChange={e => (
            handlePostChange(e))}  />
        <textarea type="text" 
          name="body" 
          placeholder="Enter text here..." 
          value={ body } 
          onChange={e => (
            handlePostChange(e))} />
        <button>Submit</button>
      </form>
    </div>
  );
};

PostForm.propTypes = {
  handlePostSubmit: PropTypes.func.isRequired
};

export default PostForm;
