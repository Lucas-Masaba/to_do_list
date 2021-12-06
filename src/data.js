class Data {
  static create(description, index, completed) {
    return { description, index, completed };
  }

  static get allTasks() {
    return JSON.parse(localStorage.getItem('mytodoTasks')) || [];
  }

  static updateData(status, index) {
    const { allTasks: storedData } = Data;
    storedData[Number(index)].completed = status;

    localStorage.setItem('mytodoTasks', JSON.stringify(storedData));
  }

  static resetData(data) {
    localStorage.setItem('mytodoTasks', JSON.stringify(data));
  }
}

export default Data;