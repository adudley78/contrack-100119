import React from 'react';
import PropTypes from 'prop-types';

const ContractorItem = ({ contractor }) => {
  return (
    <li className='collection-item'>
      <div>
        {contractor.firstName} {contractor.lastName}
        <a href='#!' className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

ContractorItem.propTypes = {
  contractor: PropTypes.object.isRequired
};

export default ContractorItem;
