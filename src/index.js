import './style.css';
import Data from './data.js';
import Handlers from './handlers.js';
import UI from './ui.js';

const { allTasks: tasks } = Data;
const {
  appHeader, input, todoList, footer,
} = UI;
const {
  handleCheckBoxChange,
  handleAddTask,
  removeTask,
  clearCompleted,
  handleUpdate,
} = Handlers;

const minimalist = document.getElementById('minimalist');

minimalist.innerHTML = `
    ${appHeader}
    ${input}
    ${todoList(tasks).join('')}
    ${footer}
`;

document.addEventListener('DOMContentLoaded', () => {
  minimalist.addEventListener('change', (e) => handleCheckBoxChange(e));
  minimalist.addEventListener('click', (e) => removeTask(e));
  minimalist.addEventListener('click', (e) => handleUpdate(e));

  const saveTaskButton = document.querySelector('.save-task');
  saveTaskButton.addEventListener('click', (e) => handleAddTask(e, false));

  const clearAll = document.getElementById('clear-all');
  clearAll.addEventListener('click', () => clearCompleted());
});