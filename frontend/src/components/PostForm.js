import React from 'react';
import PropTypes from 'prop-types';

const PostForm = (props) => {
  const { categoryId, handlePostSubmit, title, author, body } = props;  

	return (
		<div className="column content">
        <h2>New { categoryId } Post</h2>
        <form className="addPostForm" onSubmit={ handlePostSubmit }>
            <input type="text" name="title" placeholder="Title" defaultValue={ title } />
            <input type="text" name="author" placeholder="Who are you?" defaultValue={ author } />
            <textarea type="text" name="body" placeholder="Enter text here..." defaultValue={ body } />
            <button>Add Post</button>
        </form>
		</div>
	);
};

PostForm.propTypes = {
	handlePostSubmit: PropTypes.func.isRequired
};

export default PostForm;
