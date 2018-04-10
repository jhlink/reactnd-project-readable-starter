import React from 'react';
import CategoryListLogic from '../containers/CategoryListLogic';
import PropTypes from 'prop-types';

const App = (props) => { 
	const { categories } = props;

	return (
		<div className="App">
			<h1 className=".header">Categories</h1>
		  <CategoryListLogic categories={ categories } />
		</div>
	); 
}; 

App.propTypes = {
	categories: PropTypes.array.isRequired
};

export default App;
