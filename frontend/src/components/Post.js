import React from 'react';
import PropTypes from 'prop-types';
import CommentListLogic from '../containers/CommentListLogic';
import CommentFormLogic from '../containers/CommentFormLogic';
import { Route, Switch, NavLink } from 'react-router-dom'; 
import PostFormLogic from '../containers/PostFormLogic';

const Post = (props) => {
  const { id, timestamp, title, body, author, category, voteScore, deleted } = props.post;
  const { match, location } = props;
  const formattedDated = new Date(timestamp).toLocaleString();
  const isEditPost = location.pathname !== match.url + '/editpost';

  return (
    <div className="structure-flex-col">
      { isEditPost && (
        <div className="container-post">
          <h2 className="title-style"> { title } </h2> 
          <div className="structure-flex-row">
            <h3 className="subtitle-style"> by {author } <br/> { formattedDated } </h3>
            <NavLink 
              to={match.url + '/editpost'}
              className="nav-link edit"
            > Edit  
            </NavLink>
          </div>
          <p className="body-style"> { body } + { category } </p>  
          <div className="structure-flex-col right-align">
            <label className="vote-score"> Vote Score:  { voteScore } </label>
            <NavLink 
              to={match.url + '/addcomment'}
              className="nav-link post"
            > Post Comment  
            </NavLink>
          </div>
        </div>
      )}
      { isEditPost && (
        <div className="container-comments">
          <CommentListLogic 
            postId={ id }
            match={ match }/>
        </div>
      )}
      <Switch className="container-forms">
        <Route path={match.url + '/editpost'} render={props => (
          <PostFormLogic post={props.post} {...props}/>  
        )}/>
        <Route path={'/:category/:parentId/addcomment'} component={ CommentFormLogic }/>
        <Route path={'/:category/:parentId/:commentId/editcomment'} component={ CommentFormLogic }/>
      </Switch>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
