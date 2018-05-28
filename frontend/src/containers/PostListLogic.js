import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostList from '../components/PostList';
import { FetchAllPosts, FetchCategoryPosts, SendVoteForPost, DeletePost } from '../actions';
import _ from 'lodash';

class PostListLogic extends Component {
  /* TODO: Ask how if this is what production code looks like
   *        and if components are initialized with props with lifecycle methods
   */
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      formSortCriteria: { criteria: 'voteScore',
        order: 'desc'} 
    };
    this.handleVote = this.handleVote.bind(this);
    this.handleSelectedSort = this.handleSelectedSort.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handlePostDispatch = ( categoryId ) => {
    if (categoryId) {
      this.props.dispatch(FetchCategoryPosts(categoryId));
    } else {
      this.props.dispatch(FetchAllPosts());
    }
  }

  handleVote = (postId, e) => {
    e.preventDefault();
    const voteType = { option: e.target.id };
    console.log(voteType);
    this.props.dispatch(SendVoteForPost(postId, voteType));
  }

  handleDelete = (postId, e) => {
    e.preventDefault();
    this.props.dispatch(DeletePost(postId, () => {}));
  }

  handleSelectedSort = ( e ) => {
    e.preventDefault();
    const sortCrit = JSON.parse(e.target.value);
    console.log(sortCrit);
    this.setState({ formSortCriteria: sortCrit });
  }

  postSorter = (posts) => {
    const nposts = _.orderBy(posts, 
      this.state.formSortCriteria.criteria, 
      this.state.formSortCriteria.order);
    return nposts;
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

    this.setState({ posts: nextProps.posts });
  }
  
  render() {
    const { posts } = this.state;
    const sorted = this.postSorter(posts);
    const { match, location } = this.props;
    const sortValues = { formSortCriteria: this.state.formSortCriteria, sortHandler: this.handleSelectedSort };

    return <PostList posts={ sorted } 
      match={ match } 
      location={ location }
      voteHandler={ this.handleVote }
      deleteHandler={ this.handleDelete }
      sortValues={ sortValues }/>;
  }
}

PostListLogic.propTypes = {
  posts: PropTypes.array
};

const mapStateToProps = (state, props) => {
  const { posts } = state.postHandler;

  return { posts };
};

export default connect(mapStateToProps)(PostListLogic);
