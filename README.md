# Readable API Server

This is the starter project for the final assessment project for Udacity's Redux course where you will build a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.

This repository includes the code for the backend API Server that you'll use to develop and interact with the front-end portion of the project.

## Start Developing

To get started developing right away:

* Install and start the API server
    - `cd api-server`
    - `npm install`
    - `node server`
* In another terminal window, install and start the pre-scaffolded Create React App project
    - `cd frontend`
    - `npm install`
    - `npm start`

## API Server

Information about the API server and how to use it can be found in its [README file](api-server/README.md).

## Access The API Server

To accesss the backend server in your code, we have stored the URL to the API server in the environment variable `REACT_APP_BACKEND` which you can access in your code using `process.env.REACT_APP_BACKEND`. You can see this in action in `frontend/src/App.js` in `componentDidMount`.


--7. Move comment count and other stuff to Post list view

--5. Implement delete comment
2. All posts are listed at the root.
3. Root list page has sort mechanism 
4. Root list page has AddPost 
-- 8. Clicking the button/link correctly removes the post/comment from list view and makes post inaccessible at its URL. When a user goes to a deleted post’s URL, a 404 page is displayed.

Stretch Goals
-- Replace Immutability-Helper and lodash with Facebook's Immutable.js
