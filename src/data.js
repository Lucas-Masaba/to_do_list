class Data {
  static create(description, index, completed) {
    return { description, index, completed };
  }

  static get allTasks() {
    if (localStorage.getItem('mytodoTasks')) {
      return JSON.parse(localStorage.getItem('mytodoTasks'));
    }
    localStorage.setItem('mytodoTasks', JSON.stringify([]));
    return [];
  }

  static updateData(status, index) {
    const { allTasks: storedData } = Data;
    storedData[Number(index)].completed = status;

    localStorage.setItem('mytodoTasks', JSON.stringify(storedData));
  }
}

export default Data;