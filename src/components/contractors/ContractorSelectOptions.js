import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getContractors } from '../../actions/contractorActions';

const ContractorSelectOptions = ({
  getContractors,
  contractor: { contractors, loading }
}) => {
  useEffect(() => {
    getContractors();
  }, []);

  return (
    !loading &&
    contractors !== null &&
    contractors.map(c => (
      <option key={c.id} value={`${c.firstName} ${c.lastName}`}>
        {c.firstName} {c.lastName}
      </option>
    ))
  );
};

ContractorSelectOptions.propTypes = {
  contractor: PropTypes.object.isRequired,
  getContractors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  contractor: state.contractor
});

export default connect(
  mapStateToProps,
  { getContractors }
)(ContractorSelectOptions);
