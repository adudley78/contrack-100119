import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import AddButton from './components/layout/AddButton';
import AddTaskModal from './components/tasks/AddTaskModal';
import EditTaskModal from './components/tasks/EditTaskModal';
import AddContractorModal from './components/contractors/AddContractorModal';
import ContractorListModal from './components/contractors/ContractorListModal';
import Tasks from './components/tasks/Tasks';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // Initialize Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <AddButton />
        <AddTaskModal />
        <EditTaskModal />
        <AddContractorModal />
        <ContractorListModal />
        <Tasks />
      </div>
    </Fragment>
  );
};

export default App;
