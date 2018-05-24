import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, NavLink } from 'react-router-dom';
import PostListLogic from '../containers/PostListLogic';
import PostFormLogic from '../containers/PostFormLogic';

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
				{/*
         / TODO: From a production standpoint, this feels wrong. I feel that the AddPost compoenent
         /  would make better logical sense to put in PostListLogic, which is where the NavLink to
         /  AddPost exists. This separation of Route and NavLink components just feels like a huge
         /  red flag, yet at the same time this method achieves the purpose of "hiding" the list of
         /  posts when adding a new post in a very clean and reusable fashion. 
         /  This may be subjective, but in general if you're navigating to a new page or appending a new
         /  URL path, is it okay to place the NavLink in a separate component and add the Route
         /  to that component to the parent of that component?
        */}
				<Route path={'/:categoryId/addpost'} component={ PostFormLogic }/>
				<Route path={'/:categoryId?'} component={ PostListLogic }/>
			</Switch>
		</div>
	);
};

CategoryList.propTypes = {
	categories: PropTypes.array.isRequired
};

export default CategoryList;
