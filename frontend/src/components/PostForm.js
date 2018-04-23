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

	return (
		<div className="column content">
        <h2 className="postFormHeader">{ type } Post about { category } Category</h2>
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
