// src/features/tasks/taskSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: 1, text: 'Sample Task 1', completed: false },
    { id: 2, text: 'Sample Task 2', completed: true },
  ],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: state.tasks.length + 1,
        text: action.payload,
        completed: false,
      });
    },
    toggleTaskStatus: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, toggleTaskStatus, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
