import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, NavLink } from 'react-router-dom';
import PostDetailViewLogic from '../containers/PostDetailViewLogic';

const PostList = ( props ) =>  {
  const UP_VOTE = 'upVote';
  const DOWN_VOTE = 'downVote';
  const { posts, match, location, upVote, voteHandler, sortValues } = props; 
  const postsToShow = location.pathname === match.url ? posts : [];
  const showAddPost = location.pathname !== '/' && location.pathname === match.url;
  const isEmpty = postsToShow.length === 0 ? {display: 'none'} : {};
  

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
      { showAddPost && ( 
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
            to={match.url + '/addpost'}
            className="nav-link post">
            Add Post
          </NavLink>
        </div>
      )}
      <ul style={ isEmpty }>
        {postsToShow.map((post) => (
          <li key={post.id} className="post">
            <NavLink 
              to={categoryUrl(post.category) + '/' +  post.id}
              className="nav-link item-width"
            > { post.title } 
            </NavLink>
            <div className="vote">
              <button onClick={voteHandler.bind(this, post.id)}
                id={ UP_VOTE }>UpVote</button>
              <span>Votes { post.voteScore }</span>
              <button onClick={voteHandler.bind(this, post.id)}
                id={ DOWN_VOTE }>DownVote</button>
            </div>
          </li>
        ))}
      </ul>
      <Switch> 
        <Route path={match.url + '/:postId'} component={ PostDetailViewLogic }/>
      </Switch>
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostList;
