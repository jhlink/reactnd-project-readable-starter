import * as ServerAPI from '../utils/serverAPI.js';

export const LOAD_CATEGORY_POSTS = 'LOAD_CATEGORY_POSTS';
export const LOAD_POST_COMMENTS = 'LOAD_POST_COMMENTS';
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const POST_NEW_POST = 'POST_NEW_POST';
export const GET_POST = 'GET_POST';
export const PUT_POST = 'PUT_POST';
export const POST_VOTE = 'POST_VOTE';

export const loadCategoryPosts = ( posts ) => {
	return {
		type: LOAD_CATEGORY_POSTS,
	  posts	
	};
};

export const getCategories = ( categories ) => {
  return {
    type: GET_ALL_CATEGORIES,
    categories
  };
};

export const getPosts = ( posts ) => {
  return {
    type: GET_ALL_POSTS,
    posts
  };
};

export const getPost = ( post ) => {
  return {
    type: GET_POST,
    post 
  };
};

export const loadPostComments = ( comments ) => {
  return {
    type: LOAD_POST_COMMENTS,
    comments
  };
};

export const postNewPost = ( post, cbOnSuccess ) => {
  cbOnSuccess();
  return {
      type: POST_NEW_POST,
      post 
  };
};

export const editPost = ( post, cbOnSuccess ) => {
  cbOnSuccess();
  return {
      type: PUT_POST,
      post 
  };
};

export const postVote = { voteType } => {
  
  return {
    type: POST_VOTE,
    voteType
  };
}; 

// Thunks 

export const FetchCategories = () => dispatch => {
  return ServerAPI.GetCategories()
    .then(categories => dispatch(getCategories(categories)))
};

export const FetchAllPosts = () => dispatch => {
  return ServerAPI.GetPosts()
    .then(posts => dispatch(getPosts(posts)))
};

export const FetchCategoryPosts = ( categoryId ) => dispatch => {
  return ServerAPI.GetCategoryPosts(categoryId)
    .then(categoryPosts => dispatch(loadCategoryPosts(categoryPosts)))
};

export const FetchPostComments = ( postId ) => dispatch => {
  return ServerAPI.GetPostComments(postId)
    .then(postComments => dispatch(loadPostComments(postComments)))
};

export const CreateNewPost = ( postData, cb ) => dispatch => {
  return ServerAPI.PostNewPost(postData)
    .then(post => dispatch(postNewPost(post, cb)));
};

export const FetchPost = ( postId ) => dispatch => {
  return ServerAPI.GetPost(postId)
    .then(post => dispatch(getPost(post)));
};

export const PutPost = ( postId, postBody, cb ) => dispatch => {
  return ServerAPI.PutPost(postId, postBody)
    .then(post => dispatch(editPost(post, cb)));
};

export const PostVote = ( postId, voteIntent ) => dispatch => {
  return ServerAPI.PostVote(postId, voteIntent)
    .then(post => dispatch(postVote(voteIntent)));
};
