import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContractorItem from './ContractorItem';
import { getContractors } from '../../actions/contractorActions';

const ContractorListModal = ({
  getContractors,
  contractor: { contractors, loading }
}) => {
  useEffect(() => {
    getContractors();
    // eslint-disable-next-line
  }, []);

  return (
    <div id='contractor-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Contractor List</h4>
        <ul className='collection'>
          {!loading &&
            contractors !== null &&
            contractors.map(contractor => (
              <ContractorItem contractor={contractor} key={contractor.id} />
            ))}
        </ul>
      </div>
    </div>
  );
};

ContractorListModal.propTypes = {
  contractor: PropTypes.object.isRequired,
  getContractors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  contractor: state.contractor
});

export default connect(
  mapStateToProps,
  { getContractors }
)(ContractorListModal);
