import * as ServerAPI from '../utils/serverAPI.js';

export const LOAD_CATEGORY_POSTS = 'LOAD_CATEGORY_POSTS';
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';

export const loadCategoryPosts = ( categoryId ) => {
	return {
		type: LOAD_CATEGORY_POSTS,
		categoryId
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

// Thunks 

export const FetchCategories = () => dispatch => {
  return ServerAPI.GetCategories()
    .then(categories => dispatch(getCategories(categories)))
};
