import React from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';

const Post = (props) => {
	const { timestamp, title, body, author, category, voteScore, deleted } = props.post;
  const { comments } = props;
	const hideFromDelete = deleted ? 'none' : 'block';
	const formattedDated = new Date(timestamp).toLocaleString();

  console.log(props)

	return (
		<div display={ hideFromDelete } className="column content">
      <h3 className="postSubheader"> by {author } - { formattedDated } </h3>
			<p className="postBody"> { body } + { category } </p>  
			<div className="postVoteScore"> Vote Score:  { voteScore } </div>
      <CommentList comments={ comments }/>
		</div>
	);
};

Post.propTypes = {
	post: PropTypes.object.isRequired
};

export default Post;
