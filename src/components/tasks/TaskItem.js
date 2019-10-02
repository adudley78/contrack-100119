import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const TaskItem = ({ task }) => {
  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-task-modal'
          className={`modal-trigger ${
            task.complete ? 'red-text' : 'green-text'
          }`}
        >
          {task.description}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>Task #{task.punchId}</span> assigned to{' '}
          <span className='black-text'>{task.contractor}</span> on{' '}
          <Moment format='MMMM Do YYYY, h:mm a'>{task.date}</Moment>
        </span>
        {/* Update to archive if complete */}
        <a href='#!' className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired
};

export default TaskItem;
