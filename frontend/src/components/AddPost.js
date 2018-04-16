import React from 'react';
import PropTypes from 'prop-types';

const AddPost = (props) => {
	//const { timestamp, title, body, author, category, voteScore, deleted } = props.post;
  //const { comments } = props;
	//const hideFromDelete = deleted ? 'none' : 'block';
	//const formattedDated = new Date(timestamp).toLocaleString();
  
	return (
		<div className="column content">
        <form className="addPostForm">
            <input type="text" name="title" placeholder="Title"/>
            <input type="text" name="author" placeholder="Who are you?"/>
            <textarea type="text" name="body" placeholder="Enter text here..."/>
            <button>Add Post</button>
        </form>
		</div>
	);
};

AddPost.propTypes = {
	//post: PropTypes.object.isRequired
};

export default AddPost;
