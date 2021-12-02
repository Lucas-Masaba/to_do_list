export class Storage  {
   static storageTask(toDoTasks) {
    if (localStorage.length === 0) {
      
      localStorage.setItem('tasks', JSON.stringify(toDoTasks))
    } else {
      
      const storedTask = JSON.parse(localStorage.getItem('tasks'))
      return storedTask;
    }
  }
  static storageCheckBox(checkBox) {
    const checkBoxValue = checkBox.checked;
    if (localStorage.length === 0 || checkBoxValue === true) {
      localStorage.setItem('checks', (checkBox))
      
    }
    else {
      const storedCheck = (localStorage.getItem('checks'))
      
      return storedCheck;
    }
  }
}