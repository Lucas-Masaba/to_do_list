/* eslint-disable no-unused-vars, no-undef, no-return-assign */
import _ from 'lodash';
import './style.css';
import Storage from './modules/storage.js';
import StatusReport from './modules/complete.js';
import UI from './modules/ui.js';


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

const doneCheck = document.querySelectorAll('.checkbox_style')

if (localStorage.length === 0) {
  Storage.setTask(tasksToDo);
  Storage.setCheckTask(doneCheck);
} else {
  Storage.getTask(tasksToDo);
  Storage.getCheckTask(doneCheck);
}

const taskCollection = () => {
  const taskUL = document.getElementById('tasks_id');

  tasksToDo.forEach((task) => {
    taskUL.insertAdjacentHTML('beforeend', ` <li class="task_list">
                        <input type="checkbox" class="checkbox_style" id="${task.id}"  name="${task.description}" ${
                          task.completed ? 'checked' : ''
                        }>
                        <label for="${task.description}">${task.description}</label><hr>
                       </li>`);
  });
};
document.addEventListener('DOMContentLoaded', () => {
  taskCollection();
  const checkBoxes = document.querySelectorAll('.checkbox_style');
  
  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener('change', (e) => {
    Storage.setTask(tasksToDo);
    Storage.setCheckTask(checkBox)
    StatusReport.statusUpdate(e.target, tasksToDo);
    
  })
  });
  
});
