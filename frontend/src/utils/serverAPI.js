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
export const PostVote = (postId, voteIntent) =>
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
//    USAGE:
//      Sets the deleted flag for a post to 'true'.
//      Sets the parentDeleted flag for all child comments to 'true'.

//  GET /posts/:id/comments
export const GetPostComments = (post) =>
  fetch(`${API_HOST}/posts/${post}/comments`, {
    headers:  reqHeaders
  }).then((res) => res.json());

//  POST /comments
//    USAGE:
//      Add a comment to a post
//
//    PARAMS:
//      id: Any unique ID. As with posts, UUID is probably the best here.
//      timestamp: timestamp. Get this however you want.
//      body: String
//      author: String
//      parentId: Should match a post id in the database.

//  GET /comments/:id
//    USAGE:
//      Get the details for a single comment

//  POST /comments/:id
//    USAGE:
//      Used for voting on a comment.

//  PUT /comments/:id
//    USAGE:
//      Edit the details of an existing comment
//
//    PARAMS:
//      timestamp: timestamp. Get this however you want.
//      body: String

//  DELETE /comments/:id
//    USAGE:
//      Sets a comment's deleted flag to 'true'
 
