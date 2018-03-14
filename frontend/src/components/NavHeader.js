import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from './Category.js';
import { connect } from 'react-redux';
import { loadCategoryPosts } from '../actions';

class NavHeader extends Component {

  handleSelectedCategory = (categoryName) => {
    console.log(categoryName);
    this.props.dispatch(loadCategoryPosts(categoryName))
  }

	render() {
		const { categories } = this.props;

		return (
			<div>
				<h1 className=".header">Categories</h1>
				<ul className=".nav">
					{categories.map( c => 
						<li key = { c.path } onClick={(e) => this.handleSelectedCategory(e.target.textContent)}>
							<Category category= { c } />
						</li>
					)}
				</ul>
			</div>
		);
	}
};

NavHeader.propTypes = {
	categories: PropTypes.array.isRequired
};

export default connect()(NavHeader);

