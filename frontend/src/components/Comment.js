import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Comment = (props) => { 
  const { comment, match } = props;
  const { id, timestamp, body, author, voteScore, deleted, parentDeleted } = comment;
  const formattedDated = new Date(timestamp).toLocaleString();

  return (
    <div className="structure-flex-row">
      <div className="structure-flex-col child-flex">
        <p className="body-style"> { body } </p>  
        <label className="subtitle-style"> by {author } <br/> { formattedDated } </label>
      </div>
      <div className="structure-flex-col">
        <NavLink 
          to={match.url + '/' + id + '/editcomment'}
          className="nav-link edit"
        > Edit  
        </NavLink>
        <div className="vote-score"> Vote Score:  { voteScore } </div>
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};


export default Comment;
