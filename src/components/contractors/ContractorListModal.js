import React, { useState, useEffect } from 'react';
import ContractorItem from './ContractorItem';

const ContractorListModal = () => {
  const [contractors, setContractors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getContractors();
    // eslint-disable-next-line
  }, []); // [] Ensure this only runs once

  const getContractors = async () => {
    setLoading(true);
    const res = await fetch('/contractors');
    const data = await res.json();

    setContractors(data);
    setLoading(false);
  };

  return (
    <div id='contractor-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Contractor List</h4>
        <ul className='collection'>
          {!loading &&
            contractors.map(contractor => (
              <ContractorItem contractor={contractor} key={contractor.id} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ContractorListModal;
