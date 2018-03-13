import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category.js';

const NavHeader = (props) => {
	const { categories } = props;

	return (
		<div>
			<h1 className=".header">Categories</h1>
			<ul className=".nav">
				{categories.map( c => 
					<li key = { c.path }>
						<Category category= { c } />
					</li>
				)}
			</ul>
		</div>
	);
};

NavHeader.propTypes = {
	categories: PropTypes.array.isRequired
};

export default NavHeader;

