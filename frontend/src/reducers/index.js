import { combineReducers } from 'redux';
import update from 'immutability-helper';

import {
  LOAD_CATEGORY_POSTS,
  LOAD_POST_COMMENTS,
  GET_ALL_CATEGORIES,
  GET_ALL_POSTS,
  POST_NEW_POST,
  GET_POST,
  PUT_POST,
  POST_VOTE,
  POST_NEW_COMMENT
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

    case GET_POST:
      return {
        ...state,
        post
      };

    case PUT_POST:
      return {
        ...state,
        posts: state.posts.map(sPost => {
          return (sPost.id === post.id) ? post : sPost;
        })
      };

    
    case POST_VOTE:
      return {
        ...state,
        posts: state.posts.map(sPost => {
          return (sPost.id === post.id) ? post : sPost;
        })
      };

    default :
      return state;
  }
}

function commentHandler (state = {}, action) {
  const { comments, comment } = action;

  switch (action.type) {
    case LOAD_POST_COMMENTS:
      return {
        ...state,
        comments
      };

    case POST_NEW_COMMENT:
      return {
        ...state,
        comments: update(state.comments, 
          {$push: [ comment ]})
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
