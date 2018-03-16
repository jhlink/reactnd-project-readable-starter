import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const CategoryList = (props) => {
	const { categories, handleSelectedCategory } = props;

	return (
		<div>
			<h1 className=".header">Categories</h1>
			<ul className=".nav">
				{ categories.map( c => 
					<li key={ c.path }>
            <Link 
              to={'/' +  c.path}
              onClick={() => handleSelectedCategory(c.path) }
              className="nav link"
            > { c.name } </Link>
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
