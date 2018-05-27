import React from 'react';
import PropTypes from 'prop-types';

const Voter = ( props ) => {
  const UP_VOTE = 'upVote';
  const DOWN_VOTE = 'downVote';
  const { item, voteHandler } = props; 

  return (
    <div className="vote">
      <button onClick={voteHandler.bind(this, item.id)}
        id={ UP_VOTE }>UpVote</button>
      <label className="ui-vote-score">Votes { item.voteScore }</label>
      <button onClick={voteHandler.bind(this, item.id)}
        id={ DOWN_VOTE }>DownVote</button>
    </div>
  );
};

Voter.propTypes = {
  item: PropTypes.object.isRequired,
  voteHandler: PropTypes.func.isRequired
};

export default Voter;
