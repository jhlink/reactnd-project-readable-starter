import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchCategories } from '../actions'
import App from '../components/App';

class AppLogic extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: []
		};
	}

	componentDidMount() {
    this.props.dispatch(FetchCategories());
	}

	componentWillReceiveProps(nextProps) {
    this.setState(
      nextProps.categories
    );
	}

	render() {
    const { categories } = this.state;
		return <App categories={categories}/>;
	}
}

const mapStateToProps = (state, props) => {
  const { categories } = state.categoryHandler

  return { categories };
}

export default connect(mapStateToProps)(AppLogic);
