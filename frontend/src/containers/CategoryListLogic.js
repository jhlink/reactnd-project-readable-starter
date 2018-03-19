import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryList from '../components/CategoryList';

class CategoryListLogic extends Component {

	render() {
		const { categories } = this.props;

		return <CategoryList categories={ categories }/> 
      
	}
};

CategoryListLogic.propTypes = {
	categories: PropTypes.array.isRequired
};

export default CategoryListLogic;
