import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostList from '../components/PostList';
import { FetchAllPosts, FetchCategoryPosts } from '../actions';


class PostListLogic extends Component {
	/* TODO: Ask how if this is what production code looks like
   *        and if components are initialized with props with lifecycle methods
   */
	constructor(props) {
		super(props);

		this.state = {
			posts: []
		};
	}

  handlePostDispatch = ( categoryId ) => {
    if (categoryId) {
      this.props.dispatch(FetchCategoryPosts(categoryId));
    } else {
      this.props.dispatch(FetchAllPosts());
    }
  }


  componentWillMount() {
    const { categoryId } = this.props.match.params;
    this.handlePostDispatch(categoryId);
  }

	componentWillReceiveProps(nextProps) {
    const { categoryId } = this.props.match.params;
    const newCategoryId = nextProps.match.params.categoryId;

    if (categoryId !== newCategoryId) {
      this.handlePostDispatch(newCategoryId);
    }

		this.setState( 
			nextProps.posts
		);
	}
  
	render() {
		const { posts } = this.state;
    const { match, location } = this.props;
		return <PostList posts={ posts } match={ match } location={ location }/>;
	}
}

PostListLogic.propTypes = {
	posts: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => {
  const posts = state.postHandler;

  return { posts };
};

export default connect(mapStateToProps)(PostListLogic);
