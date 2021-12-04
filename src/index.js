/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';
import Storage from './modules/storage.js';
import Handler from './modules/complete.js';

const { handleChangeInCheckbox, handleAddtask } = Handler;
const { allTasks: tasksToDo } = Storage;

const taskCollection = () => {
  const taskUL = document.getElementById('tasks_id');

  tasksToDo.forEach((task) => {
    taskUL.insertAdjacentHTML('beforeend', ` <li class="task_list">
                        <div class="remove_button_container">
                        <div>
                        
                        <input type="checkbox" class="checkbox_style" data-id=${task.id}  name="${task.description}" ${task.completed ? 'checked' : ''}>
                        <label for="${task.description}">${task.description}</label>
                        
                        </div>
                        <button id="remove_button" type="button"><span id="remove_icon">&times;</span></button>
                        </div>
                        <hr>
                       </li>`);
  });
};
document.addEventListener('DOMContentLoaded', () => {
  taskCollection();
  const checkBoxes = document.querySelectorAll('.checkbox_style');
  checkBoxes.forEach((checkBox) => checkBox.addEventListener(('change'), (e) => handleChangeInCheckbox(e)));
  
  const addButton = document.getElementById('add_button')
  const currentIndex = document.querySelectorAll('.task_list').length + 1;
  const e = document.getElementById('input_your_task');
  addButton.addEventListener('click', () => handleAddtask(e, currentIndex, false))
});
