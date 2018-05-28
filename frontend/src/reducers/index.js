import { combineReducers } from 'redux';
import update from 'immutability-helper';

import {
  GET_ALL_CATEGORIES,
  GET_ALL_POSTS,
  LOAD_CATEGORY_POSTS,
  LOAD_POST_COMMENTS,
  GET_POST,
  GET_COMMENT,
  PUT_POST,
  PUT_COMMENT,
  POST_NEW_COMMENT,
  POST_NEW_POST,
  POST_VOTE_POST,
  POST_VOTE_COMMENT,
  DELETE_POST,
  DELETE_COMMENT
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

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.map(sPost => {
          return (sPost.id === post.id) ? post : sPost;
        }),
        post
      }; 

    case PUT_POST:
      return {
        ...state,
        posts: state.posts.map(sPost => {
          return (sPost.id === post.id) ? post : sPost;
        })
      };

    
    case POST_VOTE_POST:
      return {
        ...state,
        posts: state.posts.map(sPost => {
          return (sPost.id === post.id) ? post : sPost;
        }),
        post
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
          {$push: [ comment ]}),
        comment
      };

    case PUT_COMMENT:
      return {
        ...state,
        comments: state.comments.map(sComment => {
          return (sComment.id === comment.id) ? comment : sComment;
        })
      };

    case GET_COMMENT:
      return {
        ...state,
        comment 
      }; 

    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.map(sComment => {
          return (sComment.id === comment.id) ? comment : sComment;
        }),
        comment 
      }; 

    case POST_VOTE_COMMENT:
      return {
        ...state,
        comments: state.comments.map(sComment => {
          return (sComment.id === comment.id) ? comment : sComment;
        })
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
