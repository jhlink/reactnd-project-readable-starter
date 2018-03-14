import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from './Category.js';
import { connect } from 'react-redux';

class NavHeader extends Component {

	render() {
		const { categories } = this.props;

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
	}
};

NavHeader.propTypes = {
	categories: PropTypes.array.isRequired
};

export default connect()(NavHeader);

