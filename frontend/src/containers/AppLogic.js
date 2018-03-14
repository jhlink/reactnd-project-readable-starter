import React, { Component } from 'react';
import * as ServerAPI from '../utils/serverAPI.js';
import App from '../components/App';

class AppLogic extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [],
			posts: []
		};
	}

	componentDidMount() {
		ServerAPI.GetCategories()
			.then((data) => {
				console.log(data);
				this.setState(data);
			});

		ServerAPI.GetPosts()
			.then((data) => {
				console.log(data);
				this.setState( { posts: data } );
			});
	}

	render() {
		return <App categories={this.state.categories}
			posts={this.state.posts}/>;
	}
}

export default AppLogic;
