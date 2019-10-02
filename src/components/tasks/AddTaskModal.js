import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTask } from '../../actions/taskActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTaskModal = ({ addTask }) => {
  const [description, setDescription] = useState('');
  const [complete, setComplete] = useState(false);
  const [contractor, setContractor] = useState('');

  const onSubmit = () => {
    if (description === '' || contractor === '') {
      M.toast({
        html:
          'You must add a description and select a contractor to create a new task!'
      });
    } else {
      const newTask = {
        description,
        complete,
        date: new Date(),
        contractor
      };

      addTask(newTask);

      M.toast({ html: `Task added by ${contractor}` });

      setDescription('');
      setContractor('');
      setComplete(false);
    }
  };

  return (
    <div id='add-task-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter Punch List Task</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='description'
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <label htmlFor='description' className='active'>
              Task description
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='contractor'
              value={contractor}
              className='browser-default'
              onChange={e => setContractor(e.target.value)}
            >
              <option value='' disabled>
                Select Contractor
              </option>
              <option value='Luke Hansen'>Luke Hansen</option>
              <option value='Levi Nelson'>Levi Nelson</option>
              <option value='Adam Dudley'>Adam Dudley</option>
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={complete}
                  value={complete}
                  onChange={e => setComplete(!complete)}
                />
                <span>Check to Mark Complete</span>
              </label>
            </p>
          </div>
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
  );
};

AddTaskModal.propTypes = {
  addTask: PropTypes.func.isRequired
};

const modalStyle = {
  width: '75%',
  height: '75%'
};

export default connect(
  null,
  { addTask }
)(AddTaskModal);
