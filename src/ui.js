class UI {
  static get appHeader() {
    return `
    <li class="appHeader">
        <h1>Today's To Do</h1>
        <span>&#8634</span>
    </li>`;
  }

  static get input() {
    return `
    <li>
        <input type="text" id="task-description" name="description" placeholder="Add to your list...">
         
        <span class="save-task">&crarr;</span>
    </li>
    `;
  }

  static todoList(tasks) {
    return tasks
      .map((task, index) => `
      <li class="task-item" title="Double click description to edit"> 
          <p>
              <span>
                    <label for="task list"> 
                    <input class="status" data-index="${index}" type="checkbox"${task.completed ? 'checked' : ''} />
                       <span  class="description"> ${task.description}  </span>
                    </label>
              </span>
              
          </p>
          <p>
            <i data-index="${index}" class="remove-item">&times</i>
            <span class="drag-around">&#8942</span>
          </p>
      </li>
  `);
  }

  static get footer() {
    return `<li id="clear-all">
        <div>
            Clear all completed
        </div>
    </li>
    `;
  }
}

export default UI;