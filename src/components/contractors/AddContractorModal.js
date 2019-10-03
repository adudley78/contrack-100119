import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addContractor } from '../../actions/contractorActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddContractorModal = ({ addContractor }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({
        html:
          'You must add a description and select a contractor to create a new task!'
      });
    } else {
      addContractor({
        firstName,
        lastName
      });

      M.toast({
        html: `${firstName} ${lastName} was added as a contractor.`
      });

      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div id='add-contractor-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Contractor</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>

        <div className='modal-footer'>
          <a
            href='#!'
            onClick={onSubmit}
            className='modal-close waves-effect blue btn'
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

AddContractorModal.propTypes = {
  addContractor: PropTypes.func.isRequired
};

export default connect(
  null,
  { addContractor }
)(AddContractorModal);
