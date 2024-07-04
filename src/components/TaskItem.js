// src/components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className={`p-4 mb-2 border ${task.completed ? 'bg-green-200' : 'bg-red-200'}`}>
      <div className="flex justify-between items-center">
        <span>{task.text}</span>
        <div>
          <button
            className="bg-yellow-500 text-white px-2 py-1 mr-2"
            onClick={() => onToggle(task.id)}
          >
            {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
          </button>
          <button
            className="bg-red-500 text-white px-2 py-1"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
