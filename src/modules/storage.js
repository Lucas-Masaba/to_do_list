export default class Storage {
  static get allTasks() {
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
    if (localStorage.getItem('myTasks')) {
      return JSON.parse(localStorage.getItem('myTasks'));
    }
    localStorage.setItem('myTasks', JSON.stringify(tasksToDo));
    return tasksToDo;
  }

  static updateData(status, index) {
    const { allTasks: storedData } = Storage;
    storedData[Number(index)].completed = status;
    localStorage.setItem('myTasks', JSON.stringify(storedData));
  }
}