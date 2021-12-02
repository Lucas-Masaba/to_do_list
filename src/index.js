import _ from 'lodash';
import './style.css';
import { validate } from './js_modules/taskcoomplete.js';
import { Storage } from './js_modules/storage.js';


const tasksToDo = [
  {
    id: 0,
    description: 'wash the dishes',
    completed: false,
  },
  {
    id: 1,
    description: 'complete To Do list project',
    completed: false,
  },
];

const taskCollection = () => {
  const taskUL = document.getElementById('tasks_id');

  tasksToDo.forEach((task) => {
    taskUL.insertAdjacentHTML('beforeend', ` <li class="task_list">
                        <input type="checkbox" class="checkbox_style" id="${task.id}"  name="${task.description}">
                        <label class="checkbox_label some" for="${task.description}">${task.description}</label><hr>
                       </li>`);
                       
  });
};
document.addEventListener('DOMContentLoaded', () => {
  taskCollection();
  const eachCheckbox = document.querySelectorAll('checkbox_style')
  eachCheckbox.forEach((element) => {
    element.addEventListener('change', (e) => {
    Storage.storageTask(tasksToDo);
    
    validate(e.target, tasksToDo);    
  })})
  
});