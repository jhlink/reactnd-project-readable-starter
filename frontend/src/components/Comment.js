import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Comment = (props) => { 
  const { comment, match } = props;
  const { timestamp, body, author, voteScore, deleted, parentDeleted } = comment;
  const hideFromDelete = parentDeleted || deleted;
  const formattedDated = new Date(timestamp).toLocaleString();

  return (
    <div display={ hideFromDelete } className="comment content">
      <div className="horizJust header">
        <div>
          <p className="commentBody"> { body } </p>  
          <h3 className="commentAuthor"> by {author } - { formattedDated } </h3>
        </div>
        <NavLink 
          to={match.url + '/editcomment'}
          className="nav link edit"
        > Edit  
        </NavLink>
      </div>
      <div className="commentVoteScore"> Vote Score:  { voteScore } </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};


export default Comment;
