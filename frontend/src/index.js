import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppLogic from './containers/AppLogic';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
	rootReducer,
  composeEnhancers(
    applyMiddleware(thunkMiddleware),
    applyMiddleware(loggerMiddleware)
  )
);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<AppLogic /> 
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
