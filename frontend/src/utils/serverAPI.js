const AUTH_KEY = 'dev_test_1';
const API_HOST = 'http://localhost:3001';

const reqHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': AUTH_KEY 
};

//  GET /categories
export const GetCategories = () => 
  fetch(`${API_HOST}/categories`, { 
    headers: reqHeaders
  }).then((res) => res.json());

//  GET /:category/posts
export const GetCategoryPosts = (category) => 
  fetch(`${API_HOST}/${category}/posts`, {
    headers:  reqHeaders
  }).then((res) => res.json());

//  GET /posts
export const GetPosts = () =>
  fetch(`${API_HOST}/posts`, { 
    headers: reqHeaders
  }).then((res) => res.json());

//  POST /posts
export const PostNewPost = (postData) =>
  fetch(`${API_HOST}/posts`, {
    headers: reqHeaders,
    method: 'POST',
    body: JSON.stringify(postData)
  }).then((res) => res.json());

//  GET /posts/:id
export const GetPost = (postId) => 
  fetch(`${API_HOST}/posts/${postId}`, {
    headers:  reqHeaders
  }).then((res) => res.json());

//  POST /posts/:id
export const PostVoteForPost = (postId, voteIntent) =>
  fetch(`${API_HOST}/posts/${postId}`, {
    headers: reqHeaders,
    method: 'POST',
    body: JSON.stringify(voteIntent)
  }).then((res) => res.json());

//  PUT /posts/:id
export const PutPost = (postId, postData) => 
  fetch(`${API_HOST}/posts/${postId}`, {
    headers: reqHeaders,
    method: 'PUT',
    body: JSON.stringify(postData)
  }).then((res) => res.json());

//  DELETE /posts/:id
export const DeletePost = (postId) => 
  fetch(`${API_HOST}/posts/${postId}`, {
    headers: reqHeaders,
    method: 'DELETE',
  }).then((res) => res.json());
//    USAGE:
//      Sets the deleted flag for a post to 'true'.
//      Sets the parentDeleted flag for all child comments to 'true'.

//  GET /posts/:id/comments
export const GetPostComments = (post) =>
  fetch(`${API_HOST}/posts/${post}/comments`, {
    headers:  reqHeaders
  }).then((res) => res.json());

//  POST /comments
export const PostNewComment = (commentData) =>
  fetch(`${API_HOST}/comments`, {
    headers: reqHeaders,
    method: 'POST',
    body: JSON.stringify(commentData)
  }).then((res) => res.json());

//  GET /comments/:id
export const GetComment = (commentId) => 
  fetch(`${API_HOST}/comments/${commentId}`, {
    headers:  reqHeaders
  }).then((res) => res.json());

//  POST /comments/:id
export const PostVoteForComment = (commentId, voteIntent) =>
  fetch(`${API_HOST}/comments/${commentId}`, {
    headers: reqHeaders,
    method: 'POST',
    body: JSON.stringify(voteIntent)
  }).then((res) => res.json());

//  PUT /comments/:id
export const PutComment = (commentId, commentData) => 
  fetch(`${API_HOST}/comments/${commentId}`, {
    headers: reqHeaders,
    method: 'PUT',
    body: JSON.stringify(commentData)
  }).then((res) => res.json());

//  DELETE /comments/:id
export const DeleteComment = (commentId) => 
  fetch(`${API_HOST}/posts/${commentId}`, {
    headers: reqHeaders,
    method: 'DELETE',
  }).then((res) => res.json());
//    USAGE:
//      Sets a comment's deleted flag to 'true'
 
