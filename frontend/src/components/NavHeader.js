import React from 'react';
import PropTypes from 'prop-types';

const NavHeader = (props) => {
	const { categories } = props;

	return (
		<ul className=".header">
			{categories.map( category => {
				<li key={ category.path }>
					{ category.name }
				</li>;
			})}
		</ul>
	);
};

NavHeader.propTypes = {
	categories: PropTypes.array.isRequired
};

export default NavHeader;

