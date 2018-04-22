import React from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import { Route, Switch, NavLink } from 'react-router-dom';
import PostForm from './PostForm';

const Post = (props) => {
	const { id, timestamp, title, body, author, category, voteScore, deleted } = props.post;
  const { comments, match } = props;
	const hideFromDelete = deleted ? 'none' : 'block';
	const formattedDated = new Date(timestamp).toLocaleString();

  console.log(props)

	return (
		<div display={ hideFromDelete } className="column content">
      <h2> { title } </h2> 
      <h3 className="postSubheader"> by {author } - { formattedDated } </h3>
			<p className="postBody"> { body } + { category } </p>  
			<div className="postVoteScore"> Vote Score:  { voteScore } </div>
        <NavLink 
          to={category + '/' +  id + '/editpost'}
          className="nav link edit"
        > Edit  
        </NavLink>
      <CommentList comments={ comments }/>
      <Switch>
        <Route path={match.url + `/:postId/editpost`} component={ PostForm }/>
      </Switch>
		</div>
	);
};

Post.propTypes = {
	post: PropTypes.object.isRequired
};

export default Post;
