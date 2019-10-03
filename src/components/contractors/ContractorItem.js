import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContractor } from '../../actions/contractorActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const ContractorItem = ({
  contractor: { id, firstName, lastName },
  deleteContractor
}) => {
  const onDelete = () => {
    deleteContractor(id);
    M.toast({
      html: 'Contractor deleted!'
    });
  };

  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

ContractorItem.propTypes = {
  contractor: PropTypes.object.isRequired,
  deleteContractor: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteContractor }
)(ContractorItem);
