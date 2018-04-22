import React from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import { Route, Switch, NavLink } from 'react-router-dom';
import PostFormLogic from '../containers/PostFormLogic';

const Post = (props) => {
	const { id, timestamp, title, body, author, category, voteScore, deleted } = props.post;
  const { comments, match, location } = props;
	const hideFromDelete = deleted ? 'none' : 'block';
	const formattedDated = new Date(timestamp).toLocaleString();
  const isEditPost = location.pathname !== match.url + '/editpost';

  console.log(props)

	return (
    <div>
		{ isEditPost && (
      <div display={ hideFromDelete } className="column content">
      <h2> { title } </h2> 
      <h3 className="postSubheader"> by {author } - { formattedDated } </h3>
			<p className="postBody"> { body } + { category } </p>  
			<div className="postVoteScore"> Vote Score:  { voteScore } </div>
        <NavLink 
          to={match.url + '/editpost'}
          className="nav link edit"
        > Edit  
        </NavLink>
      <CommentList comments={ comments }/>
      </div>
    )}
      <Switch>
        <Route path={match.url + `/editpost`} component={ PostFormLogic }/> 
      </Switch>
		</div>
	);
};

Post.propTypes = {
	post: PropTypes.object.isRequired
};

export default Post;
