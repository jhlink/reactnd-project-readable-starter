import React from 'react';
import PropTypes from 'prop-types'; 

const Category = (props) => {
	const { name, path } = props; 

	return (
		<li key={path}>{name}</li> 
	);
};

Category.propTypes = {
	name: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired
};

export default Category;
