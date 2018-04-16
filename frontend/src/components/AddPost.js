import React from 'react';
import PropTypes from 'prop-types';

const AddPost = (props) => {
	//const { timestamp, title, body, author, category, voteScore, deleted } = props.post;
  //const { comments } = props;
	//const hideFromDelete = deleted ? 'none' : 'block';
	//const formattedDated = new Date(timestamp).toLocaleString();

	return (
		<div>
      <div>
        <input type="text" name="title" placeholder="Title"/>
        <input type="text" name="body" placeholder="Enter text here..."/>
        <input type="text" name="author" placeholder="Who are you?"/>
      </div>
		</div>
	);
};

AddPost.propTypes = {
	//post: PropTypes.object.isRequired
};

export default AddPost;
