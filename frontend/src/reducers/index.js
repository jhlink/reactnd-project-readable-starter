import { combineReducers } from 'redux'

import {
	LOAD_CATEGORY_POSTS,
  LOAD_POST_COMMENTS,
  GET_ALL_CATEGORIES,
  GET_ALL_POSTS,
  POST_NEW_POST
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
  const { posts, post } = action;

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

    case POST_NEW_POST:
      return {
        ...state,
          post
      };

    default :
      return state;
  }
}

function commentHandler (state = {}, action) {
  const { comments } = action;

  switch (action.type) {
    case LOAD_POST_COMMENTS:
      return {
        ...state,
        comments
      };
  
    default:
      return state;
  }

}

const rootReducer = combineReducers({
  categoryHandler,
  postHandler,
  commentHandler
});

export default rootReducer;
