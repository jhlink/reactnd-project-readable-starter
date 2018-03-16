import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

const CategoryList = (props) => {
	const { categories, handleSelectedCategory } = props;

	return (
		<div>
			<h1 className=".header">Categories</h1>
			<ul className=".nav">
				{categories.map( c => 
					<li key = { c.path } onClick={() => handleSelectedCategory(c.path)}>
						<Category category={ c } />
					</li>
				)}
			</ul>
		</div>
	);
};

CategoryList.propTypes = {
	categories: PropTypes.array.isRequired,
	handleSelectedCategory: PropTypes.func.isRequired
};

export default CategoryList;
