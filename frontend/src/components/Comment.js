import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Voter from './Voter';
import EditDeleteBlock from './EditDeleteBlock';

const Comment = (props) => { 
  const { comment, match, voteHandler, deleteHandler } = props;
  const { id, timestamp, body, author, voteScore, deleted, parentDeleted } = comment;
  const formattedDated = new Date(timestamp).toLocaleString();

  return (
    <div className="structure-flex-row">
      <div className="structure-flex-col child-flex">
        <p className="body-style"> { body } </p>  
        <label className="subtitle-style"> by {author } <br/> { formattedDated } </label>
      </div>
      <div className="structure-flex-col">
        <EditDeleteBlock 
          editLinkpath={ match.url + '/' + id + '/editcomment' }
          deleteHandler={ deleteHandler }
          className="nav-link edit"
        />   
        <Voter item={ comment } voteHandler={ voteHandler }/>
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};

export default Comment;
