import React from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import CommentFormLogic from '../containers/CommentFormLogic';
import { Route, Switch, NavLink } from 'react-router-dom';
import PostFormLogic from '../containers/PostFormLogic';

const Post = (props) => {
  const { timestamp, title, body, author, category, voteScore, deleted } = props.post;
  const { comments, match, location } = props;
  const hideFromDelete = deleted ? 'none' : 'block';
  const formattedDated = new Date(timestamp).toLocaleString();
  const isEditPost = location.pathname !== match.url + '/editpost';
  const commentListRelativePos = location.pathname === match.url + '/addcomment' ? { top: '25em' } : { top: '0em' };

  return (
    <div>
      { isEditPost && (
        <div display={ hideFromDelete } >
          <h2 className="postHeader"> { title } </h2> 
          <div className="horizJust header">
            <h3 className="postSubheader"> by {author } <br/> { formattedDated } </h3>
            <NavLink 
              to={match.url + '/editpost'}
              className="nav link edit"
            > Edit  
            </NavLink>
          </div>
          <p className="postBody"> { body } + { category } </p>  
          <div className="postVoteScore"> Vote Score:  { voteScore } </div>
          <div className="horizJust header">
            <span/>
            <NavLink 
              to={match.url + '/addcomment'}
              className="nav link comment"
            > Post Comment  
            </NavLink>
          </div>
          <CommentList comments={ comments } positionStyle={ commentListRelativePos }/>
        </div>
      )}
      <Switch>
        <Route path={match.url + '/editpost'} render={props => (
          <PostFormLogic post={props.post} {...props}/>  
        )}/>
        <Route path={'/:category/:parentId/addcomment'} component={ CommentFormLogic }/>
      </Switch>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
