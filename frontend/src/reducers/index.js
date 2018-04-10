import { combineReducers } from 'redux'

import {
	LOAD_CATEGORY_POSTS,
  GET_ALL_CATEGORIES,
  GET_ALL_POSTS
} from '../actions';

function categoryHandler (state = {}, action) {
	const { categories } = action;

  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories
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

    case LOAD_CATEGORY_POSTS:
		  return {
		  	...state,
        posts
		  };

    default :
      return state;
  }
}

const rootReducer = combineReducers({
  categoryHandler,
  postHandler
});

export default rootReducer;
