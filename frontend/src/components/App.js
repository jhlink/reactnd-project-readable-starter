import React from 'react';
import NavHeader from './NavHeader';
import PostList from './PostList';
import PropTypes from 'prop-types';

const App = (props) => { 
	const { categories, posts } = props;

	return (
		<div className="App">
			<div className="column menu">
				<NavHeader categories={ categories } />
			</div>
			<div className="column content">
				<PostList posts={ posts } />
			</div>
		</div>
	); 
}; 

App.propTypes = {
	categories: PropTypes.array.isRequired,
	posts: PropTypes.array.isRequired
};

export default App;
