import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppLogic from './containers/AppLogic';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<AppLogic /> 
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
