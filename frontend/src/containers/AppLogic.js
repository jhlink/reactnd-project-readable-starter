import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ServerAPI from '../utils/serverAPI.js';
import { FetchCategories } from '../actions'
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
    this.props.dispatch(FetchCategories());
    
		ServerAPI.GetPosts()
			.then((data) => {
				console.log(data);
				this.setState( { posts: data } );
			});
	}

	componentWillReceiveProps(nextProps) {
    this.setState(
      nextProps.categories
    );
	}

	render() {
    const { categories } = this.state;
		return <App categories={categories}
			posts={this.state.posts}/>;
	}
}

const mapStateToProps = (state, props) => {
  const { categories } = state.categoryHandler

  return { categories };
}

export default connect(mapStateToProps)(AppLogic);
