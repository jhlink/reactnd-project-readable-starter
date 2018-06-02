import React from 'react';
import CategoryList from './CategoryList';
import NotFound from './NotFound';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

const App = (props) => { 
  const { categories } = props;

  return (
    <div>
      <Switch>
        <Route exact path='/404' component={ NotFound } />
        <Route path="/" render={ () => (
          <div>
            <h1 className="title-header">Categories</h1>
            <CategoryList categories={ categories } />
          </div>
        )}/>
      </Switch>
    </div>
  ); 
}; 

App.propTypes = {
  categories: PropTypes.array.isRequired
};

export default App;
