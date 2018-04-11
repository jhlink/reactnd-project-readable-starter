import React from 'react';
import CategoryList from './CategoryList';
import PropTypes from 'prop-types';

const App = (props) => { 
	const { categories } = props;

	return (
		<div>
			<h1 className="header category">Categories</h1>
		  <CategoryList categories={ categories } />
		</div>
	); 
}; 

App.propTypes = {
	categories: PropTypes.array.isRequired
};

export default App;
