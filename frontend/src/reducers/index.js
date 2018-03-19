import {
	LOAD_CATEGORY_POSTS,
  GET_ALL_CATEGORIES,
  GET_ALL_POSTS
} from '../actions';

function categoryHandler (state = {}, action) {
	const { categoryId, categories } = action;

  switch (action.type) {
    case LOAD_CATEGORY_POSTS:
		  return {
		  	...state,
		  	selectedCategoryId: categoryId
		  };

    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: categories
      };

    default : 
      return state;
  }
}

function postHandler (state = {}, action) {
  const { posts } = action;

  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts
      };

    default :
      return state;

  }
}

export default categoryHandler;
