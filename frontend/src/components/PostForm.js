import React from 'react';
import PropTypes from 'prop-types';

const PostForm = (props) => {
  
	return (
		<div className="column content">
        <h2>New { props.categoryId } Post</h2>
        <form className="addPostForm" onSubmit={ props.handlePostSubmit }>
            <input type="text" name="title" placeholder="Title"/>
            <input type="text" name="author" placeholder="Who are you?"/>
            <textarea type="text" name="body" placeholder="Enter text here..."/>
            <button>Add Post</button>
        </form>
		</div>
	);
};

PostForm.propTypes = {
	handlePostSubmit: PropTypes.func.isRequired
};

export default PostForm;
