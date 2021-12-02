/* eslint-disable no-unused-vars, no-undef, no-return-assign */
import _ from 'lodash';
import './style.css';
import { Storage } from './modules/storage';

  const tasksToDo = [
  {
    id: '0',
    description: 'wash the dishes',
    completed: false,
  },
  {
    id: '1',
    description: 'complete To Do list project',
    completed: false,
  },
];
if (localStorage.length == 0) {
  Storage.setTask(tasksToDo)
} else {
  Storage.getTask(tasksToDo)
}
const taskCollection = () => {
  const taskUL = document.getElementById('tasks_id');

  tasksToDo.forEach((task) => {
    
    taskUL.insertAdjacentHTML('beforeend', ` <li class="task_list">
                        <input type="checkbox" class="checkbox_style" id="${task.id}"  name="${task.description}">
                        <label for="${task.description}">${task.description}</label><hr>
                       </li>`);
  });
};
document.addEventListener('DOMContentLoaded', () => {
  taskCollection();
  const checkBoxes = document.querySelectorAll('.checkbox_style')
  checkBoxes.forEach((checkBox) => {
    Storage.setTask(tasksToDo)
  })
});