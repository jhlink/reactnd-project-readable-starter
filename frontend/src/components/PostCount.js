import React from 'react';
import PropTypes from 'prop-types';

const PostCount = (props) => {
  const { count } = props;

  return <label> Comments: { count } </label>;
};

PostCount.propTypes = {
  count: PropTypes.number.isRequired
};

export default PostCount;
