import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TaskItem from './TaskItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { getTasks } from '../../actions/taskActions';

const Tasks = ({ task: { tasks, loading }, getTasks }) => {
  useEffect(() => {
    getTasks();
  }, []);

  if (loading || tasks === null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'></li>
      <h4 className='center'>Contrack Smart Punch List</h4>
      {!loading && tasks.length === 0 ? (
        <p className='center'>No tasks to show...</p>
      ) : (
        tasks.map(task => <TaskItem task={task} key={task.id} />)
      )}
    </ul>
  );
};

Tasks.propTypes = {
  task: PropTypes.object.isRequired,
  getTasks: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  task: state.task
});

export default connect(
  mapStateToProps,
  { getTasks }
)(Tasks);
