import React from 'react';
import CategoryListLogic from '../containers/CategoryListLogic';
import PropTypes from 'prop-types';

const App = (props) => { 
	const { categories } = props;

	return (
		<div className="App">
			<div className="column menu">
				<CategoryListLogic categories={ categories } />
			</div>
		</div>
	); 
}; 

App.propTypes = {
	categories: PropTypes.array.isRequired
};

export default App;
