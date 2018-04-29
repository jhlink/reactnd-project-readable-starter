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
        <select>
          <option value="voteScoreDesc">Most Popular</option>
          <option value="voteScoreAsc">Least Popular</option>
          <option value="timestampDesc">Newest Post</option>
          <option value="timestampAsc">Oldest Post</option>
        </select>

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
              <div className="vote">
                <button onClick={upVote.bind(this, post.id)}>UpVote</button>
                <span>Votes: { post.voteScore }</span>
                <button onClick={downVote.bind(this, post.id)}>DownVote</button>
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
