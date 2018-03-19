import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, NavLink } from 'react-router-dom';
import PostListLogic from '../containers/PostListLogic'

const CategoryList = (props) => {
	const { categories } = props;

	return (
		<div>
			<h1 className=".header">Categories</h1>
			<ul className=".nav">
				{ categories.map( c => 
					<li key={ c.path }>
            <NavLink 
              to={'/' +  c.path}
              className="nav link"
            > { c.name } </NavLink>
					</li>
				)}
			</ul>

      <Switch> 
        <Route path={`/:categoryId?`} component={ PostListLogic }/>
      </Switch>
		</div>
	);
};

CategoryList.propTypes = {
	categories: PropTypes.array.isRequired
};

export default CategoryList;
