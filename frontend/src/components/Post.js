import React from 'react';
import PropTypes from 'prop-types';
import CommentListLogic from '../containers/CommentListLogic';
import PostCommentCounter from '../containers/PostCommentCounter';
import CommentFormLogic from '../containers/CommentFormLogic';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'; 
import Voter from './Voter';
import EditDeleteBlock from './EditDeleteBlock';

const Post = (props) => {
  const { post, match, location, voteHandler, deleteHandler, shouldRedirect } = props;
  const { id, timestamp, title, body, author, category } = post;
  const formattedDated = new Date(timestamp).toLocaleString();
  const isEditPost = location.pathname !== match.url + '/editpost';

  return (
    <div className="structure-flex-col">
      { shouldRedirect && (
        <Redirect from="*" to="/404"/>
      )}
      { isEditPost && (
        <div className="container-post">
          <h2 className="title-style"> { title } </h2> 
          <div className="structure-flex-row">
            <h3 className="subtitle-style"> by {author } <br/> { formattedDated } </h3>
            <EditDeleteBlock 
              editLinkPath={match.url + '/editpost'}
              deleteHandler={ deleteHandler }
            />
          </div>
          <p className="body-style"> { body } + { category } </p>  
          <div className="structure-flex-col right-align">
            <Voter 
              item={ post }
              voteHandler={ voteHandler }/> 
            <PostCommentCounter match={ match } postId={ id }/>
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
        <Route path={'/:category/:parentId/addcomment'} component={ CommentFormLogic }/>
        <Route path={'/:category/:parentId/:commentId/editcomment'} component={ CommentFormLogic }/>
      </Switch>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  voteHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  shouldRedirect: PropTypes.bool
};

export default Post;
