import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostList from '../components/PostList';
import { FetchAllPosts, FetchCategoryPosts, PostVote } from '../actions';
import update from 'immutability-helper';


class PostListLogic extends Component {
	/* TODO: Ask how if this is what production code looks like
   *        and if components are initialized with props with lifecycle methods
   */
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
      formSortCriteria: {voteScore: "desc"} 
		};
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
    this.handleSelectedSort = this.handleSelectedSort.bind(this);
	}

  handlePostDispatch = ( categoryId ) => {
    if (categoryId) {
      this.props.dispatch(FetchCategoryPosts(categoryId));
    } else {
      this.props.dispatch(FetchAllPosts());
    }
  }

  handleUpVote = (postId, e) => {
    e.preventDefault();
    const upVote = { option: "upVote" };
    console.log(upVote);
    this.props.dispatch(PostVote(postId, upVote));
  }

  handleDownVote = (postId, e) => {
    e.preventDefault();
    const downVote = { option: "downVote" };
    console.log(downVote);
    this.props.dispatch(PostVote(postId, downVote));
  }

  handleSelectedSort = ( e ) => {
    e.preventDefault();
    const sortCrit = JSON.parse(e.target.value);
    console.log(sortCrit);
    this.setState({formSortCriteria: e.target.value});
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

    const mergedPosts = update(this.state.posts, {$set: nextProps.posts})
      .map(post => {
        if (nextProps.post !== undefined) {
          if (nextProps.post.id === post.id) {
            return nextProps.post;
          } 
        }
        return post;
     }
   );

    this.setState({ posts: mergedPosts });
	}
  
	render() {
		const { posts } = this.state;
    const { match, location } = this.props;
    const sortValues = { formSortCriteria: this.state.formSortCriteria, sortHandler: this.handleSelectedSort };
		return <PostList posts={ posts } 
                     match={ match } 
                     location={ location }
                     upVote={ this.handleUpVote }
                     downVote={ this.handleDownVote }
                     sortValues={ sortValues }/>;
	}
}

PostListLogic.propTypes = {
	posts: PropTypes.array
};

const mapStateToProps = (state, props) => {
  const { posts, post } = state.postHandler;

  return { posts, post };
};

export default connect(mapStateToProps)(PostListLogic);
