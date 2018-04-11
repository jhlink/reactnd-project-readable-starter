import * as ServerAPI from '../utils/serverAPI.js';

export const LOAD_CATEGORY_POSTS = 'LOAD_CATEGORY_POSTS';
export const LOAD_POST_COMMENTS = 'LOAD_POST_COMMENTS';
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';

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

export const loadPostComments = ( comments ) => {
  return {
    type: LOAD_POST_COMMENTS,
    comments
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
