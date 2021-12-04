import Storage from "./storage";

export default class UI {
  static addTask(event) {
    event.preventDefault();
    if(UI.inputIsValid('#input_your_task')) {
      const inputTask = document.querySelectorAll('.input_container')
      const {allTasks} = Storage;
      const id = allTasks.length + 1;
      
      const newTask = {
        id,
        description: inputTask.description.value,  
      }
      UI.appendTask(newTask);
    }
  }
  
  static inputIsValid(inputTask) {
    const input =[...document.querySelectorAll(inputTask)];
    return input.every((input) => input.value.trim().length > 2);
  }
  static resetForm(){
    const input = [...document.querySelectorAll('input_your_task')]
    input.forEach((e) => input.value = '');
  }
  static appendTask(newTask) {
    const tasksUL = document.getElementById('tasks_id')
    const newTaskToAppend = document.createElement('li')
    newTaskToAppend.innerHTML = `
    <li class="task_list">
    <div class="remove_button_container">
    <div>
    <input type="checkbox" class="checkbox_style" data-id=${task.id}  name="${task.description}" ${task.completed ? 'checked' : ''}>
    
    <label for="${task.description}">${task.description}</label>
    </div>
    <button id="remove_button" type="button"><span id="remove_icon">&times;</span></button>
    </div>
    <hr>
   </li>`
    tasksUL.appendChild(newTaskToAppend);    
  }
}