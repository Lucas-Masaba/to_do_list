class Data {
  static get allTasks() {
    console.log('mock')
    return [
      { 
        description: 'Task 1', 
        index: 0,
        completed: false,
      },
      { 
        description: 'Task 2', 
        index: 1,
        completed: true,
      },
    ];
  }

  static resetData(data) {
    return data;
  }
}

export default Data;