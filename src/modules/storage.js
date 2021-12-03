export default class Storage {
  static setTask(theTasks) {
    localStorage.setItem('tasks', JSON.stringify(theTasks));
  }

  static getTask(theTasks) {
    return JSON.parse(localStorage.getItem(theTasks));
  }
  static setCheckTask(tasks) {
    localStorage.setItem("checkbox1", JSON.stringify(tasks.checked))
  }
  static getCheckTask(tasks){
    return JSON.parse(localStorage.getItem("checkbox1"))
  }
}