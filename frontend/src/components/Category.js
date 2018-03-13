import React from 'react';
import PropTypes from 'prop-types'; 

const Category = (props) => {
	const { category } = props;
	console.log(category);
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
