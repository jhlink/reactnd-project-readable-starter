import {
	LOAD_CATEGORY_POSTS,
  GET_ALL_CATEGORIES
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

export default categoryHandler;
