import React, { Component } from 'react';
import * as ServerAPI from '../utils/serverAPI.js';
import NavHeader from './NavHeader.js';

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
		const { categories } = this.state;

		return (
			<div className="App">
				<div className="column menu">
					<NavHeader categories={ categories } />
				</div>
				<div className="column content">
				</div>
			</div>
		);
	}
}

export default App;
