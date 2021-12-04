import Data from './data.js';

class Handlers {
  static handleCheckBoxChange(e) {
    if (e.target.className === 'status') {
      const { updateData } = Data;
      const status = e.target.checked;
      const index = e.target.getAttribute('data-index');

      updateData(status, index);
    }
  }

  static handleAddTask(e, completed) {
    const { allTasks, create } = Data;
    const currentIndex = document.querySelectorAll('.task-item').length + 1;
    const description = e.target.previousElementSibling.value;
    const newTask = create(description, currentIndex, completed);
    const afterAddNew = [...allTasks, newTask];
    afterAddNew.forEach((item, index) => { item.index = index; });

    localStorage.setItem('mytodoTasks', JSON.stringify(afterAddNew));

    const { appendTask } = Handlers;
    appendTask(newTask);
  }

  static removeTask(e) {
    if (e.target.className === 'remove-item') {
      const index = e.target.getAttribute('data-index');

      const { allTasks } = Data;

      const { renderList } = Handlers;

      allTasks.splice(index, 1);
      allTasks.forEach((item, index) => { item.index = index; });
      localStorage.setItem('mytodoTasks', JSON.stringify(allTasks));

      const existingLists = document.querySelectorAll('.task-item');
      existingLists.forEach((item) => item.remove());

      renderList(allTasks);
    }
  }

  static appendTask(task) {
    const listItem = `
    <li class="task-item">
        <p>
            <span>
                <label for="task list"> 
                <input class="status"  data-index="${task.index - 1}" type="checkbox" />
                <span class="description">${task.description}  </span>
                </label>
            </span>
        </p>
        <p>
            <i  data-index="${task.index - 1}" class="remove-item">&times</i>
            <span class="drag-around">&#8942</span>
        </p>
    </li>
    `;

    const clearAll = document.getElementById('clear-all');
    clearAll.insertAdjacentHTML('beforebegin', listItem);
  }

  static renderList(list) {
    const clearAll = document.getElementById('clear-all');
    list.forEach((item, index) => { item.index = index; });
    const listItems = list.map((task, index) => `
        <li class="task-item"> 
            <p>
                <span>
                    <label for="task list"> 
                    <input  class="status"  data-index="${index}" type="checkbox"${task.completed ? 'checked' : ''} />
                        <span  class="description"> ${task.description} </span>
                    </label>
                </span>
                
            </p>
            <p>
            <i data-index="${index}" class="remove-item">&times</i>
            <span class="drag-around">&#8942</span>
            </p>
        </li>
        `);

    clearAll.insertAdjacentHTML('beforebegin', listItems.join(''));
  }

  static clearCompleted() {
    const { allTasks } = Data;
    const afterRemovedCompleted = allTasks.filter((task) => task.completed !== true);

    afterRemovedCompleted.forEach((item, index) => { item.index = index; });

    localStorage.setItem('mytodoTasks', JSON.stringify(afterRemovedCompleted));

    const existingLists = document.querySelectorAll('.task-item');
    existingLists.forEach((item) => item.remove());

    const { renderList } = Handlers;
    renderList(afterRemovedCompleted);
  }

  static createUpdateHandle(e) {
    if (e.target.className === 'description') {
      const initialText = e.target.textContent;
      e.target.innerHTML = `
            <p>
                <input type="text" placeholder="${initialText}"/> <br/>
                <button>Update</button>  <button>Cancel</button>
            </p>
            `;
    }
  }
}

export default Handlers;
