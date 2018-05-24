import React from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import { Route, Switch, NavLink } from 'react-router-dom';
import PostFormLogic from '../containers/PostFormLogic';

const Post = (props) => {
  const { timestamp, title, body, author, category, voteScore, deleted } = props.post;
  const { comments, match, location } = props;
  const hideFromDelete = deleted ? 'none' : 'block';
  const formattedDated = new Date(timestamp).toLocaleString();
  const isEditPost = location.pathname !== match.url + '/editpost';

  return (
    <div>
      { isEditPost && (
        <div display={ hideFromDelete } className="column content">
          <h2 className="postHeader"> { title } </h2> 
          <div className="horizJust">
            <h3 className="postSubheader"> by {author } - { formattedDated } </h3>
            <NavLink 
              to={match.url + '/editpost'}
              className="nav link edit"
            > Edit  
            </NavLink>
          </div>
          <p className="postBody"> { body } + { category } </p>  
          <div className="postVoteScore"> Vote Score:  { voteScore } </div>
          <div className="commentSectoin">
            <NavLink 
              to={match.url + '/addcomment'}
              className="nav link edit"
            > Edit  
            </NavLink>
            <CommentList comments={ comments }/>
          </div>
        </div>
      )}
      <Switch>
        <Route path={match.url + '/editpost'} render={props => (
          <PostFormLogic post={props.post} {...props}/>  
        )}/>
      </Switch>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
