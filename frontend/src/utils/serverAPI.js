const AUTH_KEY = 'dev_test_1';
const API_HOST = 'http://localhost:3001';

const reqHeaders = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	'Authorization': AUTH_KEY 
};

export const GetCategories = () => 
	fetch(`${API_HOST}/categories`, { 
		headers: reqHeaders
	}).then((res) => res.json());

export const GetPosts = () =>
	fetch(`${API_HOST}/posts`, { 
		headers: reqHeaders
	}).then((res) => res.json());

export const GetCategoryPosts = (category) => 
	fetch(`${API_HOST}/${category}/posts`, {
		headers:  reqHeaders
	}).then((res) => res.json());

export const GetPostComments = (post) =>
	fetch(`${API_HOST}/posts/${post}/comments`, {
		headers:  reqHeaders
	}).then((res) => res.json());

export const PostNewPost = (postData) =>
  fetch(`${API_HOST}/posts`, {
    headers: reqHeaders,
    method: 'POST',
    body: JSON.stringify(postData)
  }).then((res) => res.json());

export const GetPost = (postId) => 
	fetch(`${API_HOST}/posts/${postId}`, {
		headers:  reqHeaders
	}).then((res) => res.json());

export const PutPost = (postId, postData) => 
  fetch(`${API_HOST}/posts/${postId}`, {
    headers: reqHeaders,
    method: 'PUT',
    body: JSON.stringify(postData)
  }).then((res) => res.json());

