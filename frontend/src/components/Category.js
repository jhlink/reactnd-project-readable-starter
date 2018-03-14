import React from 'react';
import PropTypes from 'prop-types'; 

const Category = (props) => {
	const { category } = props;

	return (
		<span>
			{ category.name }
		</span>
	);
};

Category.propTypes = {
	category: PropTypes.object.isRequired
};

export default Category;
