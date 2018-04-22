import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, NavLink } from 'react-router-dom';
import PostDetailViewLogic from '../containers/PostDetailViewLogic';

const PostList = ( props ) =>  {
	const { posts, match, location } = props; 
  const filteredPosts = posts.filter(post => location.pathname === match.url + '/' + post.id);
  const postToShow =  filteredPosts.length > 0 ? filteredPosts : posts;
  const showAddPost = match.params.categoryId !== undefined ? true : false;

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
		  	{postToShow.map((post) => (
		  		<li key={post.id} className="post">
              <NavLink 
                to={match.url + '/' +  post.id}
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
