// src/App.js
import React from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <AddTaskForm />
      <TaskList />
    </div>
  );
};

export default App;
