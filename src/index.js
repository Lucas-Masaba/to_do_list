/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';
import Storage from './modules/storage.js';
import Handler from './modules/complete.js';

const { handleChangeInCheckbox } = Handler;
const { allTasks: tasksToDo } = Storage;

const taskCollection = () => {
  const taskUL = document.getElementById('tasks_id');

  tasksToDo.forEach((task) => {
    taskUL.insertAdjacentHTML('beforeend', ` <li class="task_list">
                        <input type="checkbox" class="checkbox_style" data-id=${task.id}  name="${task.description}" ${task.completed ? 'checked' : ''}>
                        <label for="${task.description}">${task.description}</label><hr>
                       </li>`);
  });
};
document.addEventListener('DOMContentLoaded', () => {
  taskCollection();
  const checkBoxes = document.querySelectorAll('.checkbox_style');
  checkBoxes.forEach((checkBox) => checkBox.addEventListener(('change'), (e) => handleChangeInCheckbox(e)));
});
