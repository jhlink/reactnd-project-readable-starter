import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const EditDeleteBlock = (props) => {
  const { editLinkPath, deleteHandler } = props;
  
  return  (
    <div id="editdeleteblock" className="structure-flex-row"> 
      <NavLink 
        to={editLinkPath}
        className="nav-link edit">
       Edit 
      </NavLink>
      <button 
        onClick={deleteHandler.bind(this)}
        className="nav-link edit">
        Delete
      </button>
    </div>
  );
};

EditDeleteBlock.propTypes = {
  editLinkPath: PropTypes.string.isRequired,
  deleteHandler: PropTypes.func.isRequired
};

export default EditDeleteBlock;
