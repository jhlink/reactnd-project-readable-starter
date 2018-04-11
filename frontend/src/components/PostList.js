import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, NavLink } from 'react-router-dom';
import PostDetailViewLogic from '../containers/PostDetailViewLogic';

const PostList = ( props ) =>  {
	const { posts, match } = props; 

	return (
    <div className="column content">
		  <ul>
		  	{posts.map((post) => (
		  		<li key={post.id} className="post">
              <NavLink 
                to={match.url + '/' +  post.id + '/comments'}
                className="nav link"
              > { post.title } 
              </NavLink>
		  		</li>
		  	))}
		  </ul>
      <Switch> 
        <Route path={match.url + `/:postId?/comments`} component={ PostDetailViewLogic }/>
      </Switch>
    </div>
	);
};

PostList.propTypes = {
	posts: PropTypes.array.isRequired
};

export default PostList;
