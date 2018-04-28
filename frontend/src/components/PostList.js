import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, NavLink } from 'react-router-dom';
import PostDetailViewLogic from '../containers/PostDetailViewLogic';

const PostList = ( props ) =>  {
	const { posts, match, location, upVote, downVote } = props; 
  const postsToShow = location.pathname === match.url ? posts : [];
  const showAddPost = location.pathname !== '/' && location.pathname === match.url;

  const categoryUrl = (postCategory) => {
    return match.url !== '/' ? match.url : postCategory;
  };

	return (
    <div className="column content">
      <div className="horizJust">
        <span/>
        { showAddPost && ( 
          <NavLink 
            to={match.url + '/addpost'}
            className="nav link addpost"
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
              <div>
                <button onClick={upVote}>UpVote</button>
                <span>Vote Score { post.voteScore }</span>
                <button onClick={downVote}>DownVote</button>
              </div>
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
