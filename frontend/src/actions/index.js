import * as ServerAPI from '../utils/serverAPI.js';

export const LOAD_CATEGORY_POSTS = 'LOAD_CATEGORY_POSTS';
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';

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

// Thunks 

export const FetchCategories = () => dispatch => {
  return ServerAPI.GetCategories()
    .then(categories => dispatch(getCategories(categories)))
};
