import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, NavLink } from 'react-router-dom';
import PostDetailViewLogic from '../containers/PostDetailViewLogic';
import PostCommentCounter from '../containers/PostCommentCounter';
import PostFormLogic from '../containers/PostFormLogic';
import EditDeleteBlock from './EditDeleteBlock';
import Voter from './Voter';

const PostList = ( props ) =>  {
  const { posts, match, location, voteHandler, deleteHandler, sortValues } = props; 
  const postsToShow = location.pathname === match.url ? posts : [];
  const postsNotDeleted = postsToShow.filter(post => !post.deleted); 
  const isEmpty = postsToShow.length === 0 ? {display: 'none'} : {};
  const postListInView = location.pathname === match.url;

  const categoryUrl = (postCategory) => {
    return match.url !== '/' ? match.url : postCategory;
  };

  const jsonify = ( criteria, order ) => {
    return JSON.stringify({ 
      criteria,
      order
    });
  };

  return (
    <div className="main-body">
      { postListInView && (
        <div className="structure-flex-row">
          <div className="structure-flex-col"> 
            <h2 className="sort-header">Sort By</h2>
            <select value={ JSON.stringify(sortValues.formSortCriteria) } 
              onChange={sortValues.sortHandler.bind(this)}
              className="sort">
              <option value={ jsonify('voteScore', 'desc') }>Most Popular</option>
              <option value={ jsonify('voteScore', 'asc') }>Least Popular</option>
              <option value={ jsonify('timestamp', 'desc') }>Newest Post</option>
              <option value={ jsonify('timestamp', 'asc') }>Oldest Post</option>
            </select>
          </div>
          <NavLink 
            to={categoryUrl('') + '/addpost'}
            className="nav-link post">
            Add Post
          </NavLink>
        </div>
      )}
      <ul style={ isEmpty }>
        {postsNotDeleted.map((post) => (
          <li key={post.id} className="post">
            <div className="structure-flex-col post-flex">
              <NavLink 
                to={categoryUrl(post.category) + '/' +  post.id}
                className="nav-link"
              > { post.title } 
              </NavLink>
              <label className="subtitle-style">{post.author}</label>
            </div>
            <div className="structure-flex-col">
              <EditDeleteBlock 
                editLinkPath={categoryUrl('') + '/' + post.id + '/editpost'}
                deleteHandler={ (e) => { deleteHandler(post.id, e); }}/>
              <PostCommentCounter match={ match } postId={post.id}/>
              <Voter item={ post }
                voteHandler={ voteHandler }/>
            </div>
          </li>
        ))}
      </ul>
      <Switch> 
        <Route path={'/:category?/:postId/editpost'} component={ PostFormLogic }/>
        <Route path={match.url + '/:postId'} component={ PostDetailViewLogic }/>
      </Switch>
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  voteHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  sortValues: PropTypes.object.isRequired
};

export default PostList;
