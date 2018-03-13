import React, { Component } from 'react';
import * as ServerAPI from '../utils/serverAPI.js';
import NavHeader from './NavHeader.js';
import PostList from './PostList.js';

class App extends Component {
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

		ServerAPI.GetCategoryPosts('react')
			.then((data) => {
				console.log(data);
				this.setState( {posts: data });
			});
	}

	render() {
		const { categories, posts } = this.state;

		return (
			<div className="App">
				<div className="column menu">
					<NavHeader categories={ categories } />
				</div>
				<div className="column content">
					<PostList posts={ posts } />
				</div>
			</div>
		);
	}
}

export default App;
