import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, NavLink } from 'react-router-dom';
import PostListLogic from '../containers/PostListLogic'

const CategoryList = (props) => {
	const { categories } = props;

	return (
		<div>
      <div className="column menu">
			  <ul>
			  	{ categories.map( c => 
			  		<li key={ c.path }>
              <NavLink 
                to={'/' +  c.path}
                className="nav link"
              > { c.name } </NavLink>
			  		</li>
			  	)}
			  </ul>
      </div>

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
