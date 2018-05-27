import React from 'react';
import PropTypes from 'prop-types';

const Voter = ( props ) => {
  const UP_VOTE = 'upVote';
  const DOWN_VOTE = 'downVote';
  const { post, voteHandler } = props; 

  <div className="vote">
    <button onClick={voteHandler.bind(this, post.id)}
      id={ UP_VOTE }>UpVote</button>
    <label className="ui-vote-score">Votes { post.voteScore }</label>
    <button onClick={voteHandler.bind(this, post.id)}
      id={ DOWN_VOTE }>DownVote</button>
  </div>;
};

Voter.propTypes = {
  post: PropTypes.object.isRequired,
  voteHandler: PropTypes.func.isRequired
};

export default Voter;
