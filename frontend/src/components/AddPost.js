import React from 'react';
import PropTypes from 'prop-types';

const AddPost = (props) => {
  
	return (
		<div className="column content">
        <form className="addPostForm" onSubmit={ props.handlePostSubmit }>
            <input type="text" name="title" placeholder="Title"/>
            <input type="text" name="author" placeholder="Who are you?"/>
            <textarea type="text" name="body" placeholder="Enter text here..."/>
            <button>Add Post</button>
        </form>
		</div>
	);
};

AddPost.propTypes = {
	handlePostSubmit: PropTypes.func.isRequired
};

export default AddPost;
