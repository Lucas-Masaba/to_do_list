import Storage from './storage.js';

export default class Handler {
  static handleChangeInCheckbox(e) {
    if (e.target.tagName === 'INPUT') {
      const { updateData } = Storage;
      const status = e.target.checked;
      const index = e.target.getAttribute('data-id');
      updateData(status, index);
    }
  }
  static handleAddtask(e, currentIndex, completed) {
    const { allTasks, create } = Storage;
    const description = e.value;
    const newTask = create(description, currentIndex, completed)
    const afterAddingNewTask = [...allTasks, newTask]
    localStorage.setItem("myTasks", JSON.stringify(afterAddingNewTask))
    const { appendNewTask } = Handler;
    appendNewTask(newTask)
  }
  static appendNewTask(task) {
    const clearAll = document.getElementById('clear_all')
    const listItem = `<li class="task_list">
    <div class="remove_button_container">
    <div>
    
    <input type="checkbox" class="checkbox_style" data-id=${task.id}  name="${task.description}" ${task.completed ? 'checked' : ''}>
    <label for="${task.description}">${task.description}</label>
    
    </div>
    <button id="remove_button" type="button"><span id="remove_icon">&times;</span></button>
    </div>
    <hr>
   </li>`
    clearAll.insertAdjacentHTML('beforebegin', listItem)
   
  }
}
