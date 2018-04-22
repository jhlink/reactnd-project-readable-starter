import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, NavLink } from 'react-router-dom';
import PostDetailViewLogic from '../containers/PostDetailViewLogic';
import PostForm from './PostForm';

const PostList = ( props ) =>  {
	const { posts, match, location } = props; 
  const postsToShow = location.pathname === match.url ? posts : [];
  const showAddPost = match.params.categoryId !== undefined ? true : false;

  const categoryUrl = (postCategory) => {
    return match.url !== '/' ? match.url : postCategory;
  };

	return (
    <div className="column content">
      <div>
        { showAddPost && ( 
          <NavLink 
            to={match.url + '/addpost'}
            className="addpost"
           >
          Add Post
          </NavLink>
        )}
        </div>
		  <ul>
		  	{postsToShow.map((post) => (
		  		<li key={post.id} className="post">
              <NavLink 
                to={categoryUrl(post.category) + '/' +  post.id}
                className="nav link"
              > { post.title } 
              </NavLink>
		  		</li>
		  	))}
		  </ul>
      <Switch> 
        <Route path={match.url + `/:postId`} component={ PostDetailViewLogic }/>
      </Switch>
    </div>
	);
};

PostList.propTypes = {
	posts: PropTypes.array.isRequired
};

export default PostList;
