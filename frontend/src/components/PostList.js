import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, NavLink } from 'react-router-dom';
import PostDetailViewLogic from '../containers/PostDetailViewLogic';

const PostList = ( props ) =>  {
	const { posts, match, location, upVote, downVote, sortValues } = props; 
  const postsToShow = location.pathname === match.url ? posts : [];
  const showAddPost = location.pathname !== '/' && location.pathname === match.url;

  const categoryUrl = (postCategory) => {
    return match.url !== '/' ? match.url : postCategory;
  };

  const jsonify = ( criteria, order ) => {
    return JSON.stringify({ 
          criteria,
          order
      });
  }

  console.log(sortValues.formSortCriteria);

	return (
    <div className="column content">
      <div className="horizJust">
        <span/>
        <select value={ JSON.stringify(sortValues.formSortCriteria) } onChange={sortValues.sortHandler.bind(this)}>
          <option value={ jsonify('voteScore', 'desc') }>Most Popular</option>
          <option value={ jsonify('voteScore', 'asc') }>Least Popular</option>
          <option value={ jsonify('timestamp', 'desc') }>Newest Post</option>
          <option value={ jsonify('timestamp', 'asc') }>Oldest Post</option>
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
