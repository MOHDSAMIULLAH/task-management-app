// src/components/TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTaskStatus, deleteTask } from '../features/tasks/taskSlice';
import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={() => dispatch(toggleTaskStatus(task.id))}
          onDelete={() => dispatch(deleteTask(task.id))}
        />
      ))}
    </div>
  );
};

export default TaskList;
