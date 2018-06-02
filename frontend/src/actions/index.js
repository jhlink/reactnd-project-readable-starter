import * as ServerAPI from '../utils/serverAPI.js';

export const LOAD_CATEGORY_POSTS = 'LOAD_CATEGORY_POSTS';
export const LOAD_POST_COMMENTS = 'LOAD_POST_COMMENTS';
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_COMMENT_COUNT = 'GET_COMMENT_COUNT';
export const POST_NEW_POST = 'POST_NEW_POST';
export const GET_POST = 'GET_POST';
export const PUT_POST = 'PUT_POST';
export const POST_VOTE_POST = 'POST_VOTE_POST';
export const POST_NEW_COMMENT = 'POST_NEW_COMMENT';
export const PUT_COMMENT = 'PUT_COMMENT';
export const GET_COMMENT = 'GET_COMMENT';
export const POST_VOTE_COMMENT = 'POST_VOTE_COMMENT';
export const DELETE_POST = 'DELETE_POST';
export const DELETE_COMMENT = 'DELETE_COMMENT';

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

export const getCommentCount = ( comments ) => {
  return {
    type: GET_COMMENT_COUNT,
    comments
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

export const sendVotePost = ( post ) => {
  return {
    type: POST_VOTE_POST,
    post
  };
}; 

export const sendVoteComment = ( comment ) => {
  return {
    type: POST_VOTE_COMMENT,
    comment
  };
}; 

export const postNewComment = ( comment, cbOnSuccess ) => {
  cbOnSuccess();
  return {
    type: POST_NEW_COMMENT,
    comment 
  };
};

export const editComment = ( comment, cbOnSuccess ) => {
  cbOnSuccess();
  return {
    type: PUT_COMMENT,
    comment 
  };
};

export const getComment = ( comment ) => {
  return {
    type: GET_COMMENT,
    comment 
  };
};

export const deletePost = ( post, cbOnSuccess ) => {
  cbOnSuccess();
  return {
    type: DELETE_POST,
    post 
  };
};

export const deleteComment = ( comment ) => {
  return {
    type: DELETE_COMMENT,
    comment 
  };
};

// Thunks 

export const FetchCategories = () => dispatch => {
  return ServerAPI.GetCategories()
    .then(categories => dispatch(getCategories(categories)));
};

export const FetchAllPosts = () => dispatch => {
  return ServerAPI.GetPosts()
    .then(posts => dispatch(getPosts(posts)));
};

export const FetchCategoryPosts = ( categoryId ) => dispatch => {
  return ServerAPI.GetCategoryPosts(categoryId)
    .then(categoryPosts => dispatch(loadCategoryPosts(categoryPosts)));
};

export const FetchPostComments = ( postId ) => dispatch => {
  return ServerAPI.GetPostComments(postId)
    .then(postComments => dispatch(loadPostComments(postComments)));
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

export const SendVoteForPost = ( postId, voteIntent ) => dispatch => {
  return ServerAPI.PostVoteForPost(postId, voteIntent)
    .then(post => dispatch(sendVotePost(post)));
};

export const CreateNewComment = ( commentData, cb ) => dispatch => {
  return ServerAPI.PostNewComment(commentData)
    .then(comment => dispatch(postNewComment(comment, cb)));
};

export const PutComment = ( commentId, commentBody, cb ) => dispatch => {
  return ServerAPI.PutComment(commentId, commentBody)
    .then(comment => dispatch(editComment(comment, cb)));
};

export const FetchComment = ( commentId ) => dispatch => {
  return ServerAPI.GetComment(commentId)
    .then(comment => dispatch(getComment(comment)));
};

export const SendVoteForComment = ( commentId, voteIntent ) => dispatch => {
  return ServerAPI.PostVoteForComment(commentId, voteIntent)
    .then(comment => dispatch(sendVoteComment(comment)));
};

export const DeletePost = ( postId, cb ) => dispatch => {
  return ServerAPI.DeletePost(postId)
    .then(post => dispatch(deletePost(post, cb)));
};

export const DeleteComment = ( commentId ) => dispatch => {
  return ServerAPI.DeleteComment(commentId)
    .then(comment => dispatch(deleteComment(comment)));
};

export const GetCommentCount = ( postId ) => dispatch => {
  return ServerAPI.GetPostComments(postId)
    .then(postComments => dispatch(getCommentCount(postComments)));
};

