import React from 'react';
import CategoryListLogic from '../containers/CategoryListLogic';
import PostListLogic from '../containers/PostListLogic';
import PropTypes from 'prop-types';

const App = (props) => { 
	const { categories, posts } = props;

	return (
		<div className="App">
			<div className="column menu">
				<CategoryListLogic categories={ categories } />
			</div>
			<div className="column content">
				<PostListLogic posts={ posts } />
			</div>
		</div>
	); 
}; 

App.propTypes = {
	categories: PropTypes.array.isRequired,
	posts: PropTypes.array.isRequired
};

export default App;
