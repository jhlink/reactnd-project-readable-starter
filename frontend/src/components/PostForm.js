import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const PostForm = (props) => {
  const { post,
    type,
    handlePostSubmit, 
    handlePostChange,
    handleCategorySelect,
    categories,
    shouldRedirect 
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
      { shouldRedirect && (
        <Redirect from="*" to="/404"/>
      )}
      <h2 className="uppercase">{ type } Post about { category } Category</h2>
      { !isEditForm && ( 
        <div className="structure-flex-col"> 
          <h2 className="sort-header">Select Category</h2>
          <select value={ category } 
            onChange={handleCategorySelect.bind(this)}
            className="sort">
            <option
              key='blank' 
              value=''
              disabled
            >
            </option>;
            { categories.map(category => {
              return <option 
                key={ category.path } 
                value={ category.path }>
                { category.name }
              </option>;
            })}
          </select>
        </div>
      )}
      <form className="form-style" onSubmit={ handlePostSubmit }>
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
