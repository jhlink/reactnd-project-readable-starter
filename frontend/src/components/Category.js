import React from 'react';
import PropTypes from 'prop-types'; 

const Category = (props) => {
	const { category } = props;
	const name = category.name;

	return (
		<span>
			{ name }
		</span>
	);
};

Category.propTypes = {
	category: PropTypes.object.isRequired
};

export default Category;
