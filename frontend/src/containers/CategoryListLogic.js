import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryList from '../components/CategoryList';
import { connect } from 'react-redux';
import { loadCategoryPosts } from '../actions';

class CategoryListLogic extends Component {

  handleSelectedCategory = (categoryName) => {
    console.log(categoryName);
    this.props.dispatch(loadCategoryPosts(categoryName))
  }

	render() {
		const { categories } = this.props;

		return <CategoryList categories={ categories } 
      handleSelectedCategory={ this.handleSelectedCategory }/>;
      
	}
};

CategoryListLogic.propTypes = {
	categories: PropTypes.array.isRequired
};

export default connect()(CategoryListLogic);
