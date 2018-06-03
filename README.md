# Readable API Server

This is the starter project for the final assessment project for Udacity's Redux course where you will build a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.

This repository includes the code for the backend API Server that you'll use to develop and interact with the front-end portion of the project.

## Instructions for Installation

Utilization of the project web app can be started by following the listed steps. 

* Install and start the API server
    - `cd api-server`
    - `npm install`
    - `npm start`
* In another terminal window, install and start the frontend project .
    - `cd frontend`
    - `npm install`
    - `npm start`

## Questions

There are a couple of questions that I've discovered while working through the project. 
They are marked with by *TODO*.

There are found in the following files: 

- src/components/CategoryList.js
- src/containers/AppLogic.js

## Notes about Application

The UI doesn't exactly create the most aesthetically pleasing experiences, but I primarily focused on functionality than appearances. 

Quick Note: I specialize in writing hardware level code, primarily C/C++. I hardly have any experience in web development, so one might notice blatant issues or problems that would otherwise be uncommon in more experienced web developers. 

Please point them out!!! I love to learn, but it's a struggle for me to figure out what or which areas, if any, I need to focus on!! D:

One might notice that there's a seemingly large conflagration of dispatched actions when loading posts in a Category or at the root level in the "All" link. This was the simplest method for displaying coment count that I could think of without writing additional code that in my opinion would overcomplicate and pollute the code base. 

Furthermore, certain quirks like the server not providing a 404 error when accessing deleted resources or the post object not storing a "comment count" property left me no option but to create workarounds in order to implement the specifications defined in the rubric. 

In production, I believe that these functions would be handle server side, but for the purposes of this exercise/project, I understand that this is definitely an interesting problem and excellent opportunity to demonstrate one's core knowledge of React-Redux-Router. 

## Final Words

Hi. My name is James. Thank you for taking the time to review my project!!
I appreciate any additional feedback you can provide regardless of how strict they may be!! I won't know how to improve if I don't know what I'm doing wrong! :) 

I hope you have an awesome, amazing day, and if anything a kick butt breakfast. 

Random thoughts: God I love breakfast. And chocolate too!! Although I do shamelessly blame Richard (Udacity Instrutor) for the now random intense cravings for ice cream. Like seriously, thanks to Richard, my friends and I now have way-too serious conversations about the best ice creams parlors/shops. Personally, I'm a fan of Cold Stones, but I've been hearing Ben & Jerry's, Graeters, and Comfy Cow. 

Anyways!! I hope you like ice cream!! :)

## API Server

Information about the API server and how to use it can be found in its [README file](api-server/README.md).

## Access The API Server

To accesss the backend server in your code, we have stored the URL to the API server in the environment variable `REACT_APP_BACKEND` which you can access in your code using `process.env.REACT_APP_BACKEND`. You can see this in action in `frontend/src/App.js` in `componentDidMount`.

