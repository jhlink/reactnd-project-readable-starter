import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as ServerAPI from './utils/serverAPI.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: []
		};
	}

	componentDidMount() {
		ServerAPI.GetCategories()
			.then((data) => {
				console.log(data);
				this.setState(data);
			});
	}

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<ul className=".header">
						{this.state.categories.map(category => (
							<li key={category.path}>
								{category.name} with path of: {category.path}
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default App;
