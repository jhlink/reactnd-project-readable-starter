import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchCategories } from '../actions';
import PropTypes from 'prop-types';
import App from '../components/App';
import { withRouter } from 'react-router-dom';

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
    const { categories } = nextProps;
    this.setState({
      categories
    });
  }

  render() {
    const { categories } = this.state;
    return <App categories={categories}/>;
  }
}

const mapStateToProps = (state) => {
  const { categories } = state.categoryHandler;

  return { categories };
};

AppLogic.propTypes = {
  categories: PropTypes.array,
  dispatch: PropTypes.func.isRequired
};


// TODO: Using withRouter here feels like a hack. Commit 859229a69 
//   Is there a better way or is this the best method to use for production?
export default withRouter(connect(mapStateToProps)(AppLogic));
