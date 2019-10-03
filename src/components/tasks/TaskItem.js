import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { deleteTask } from '../../actions/taskActions';

import M from 'materialize-css/dist/js/materialize.min.js';

// TODO: Destructure task
const TaskItem = ({ task, deleteTask }) => {
  const onDelete = () => {
    deleteTask(task.id);
    M.toast({ html: 'Task deleted' });
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-task-modal'
          className={`modal-trigger ${
            task.complete ? 'green-text' : 'red-text'
          }`}
        >
          {task.description} {task.complete ? '(complete)' : '(incomplete)'}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>Task #{task.id}</span> assigned to{' '}
          <span className='black-text'>{task.contractor}</span> on{' '}
          <Moment format='MMMM Do YYYY, h:mm a'>{task.date}</Moment>
        </span>
        {/* Update to archive if complete */}
        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteTask }
)(TaskItem);
