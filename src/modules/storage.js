export class Storage {
  static  setTask(theTasks) {
    localStorage.setItem('tasks',JSON.stringify(theTasks));

  }
  static getTask(theTasks) {
    return JSON.parse(localStorage.getItem(theTasks))
  }
}