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
    const { allTasks, create, resetData } = Data;
    const currentIndex = document.querySelectorAll('.task-item').length;

    const description = e.target.previousElementSibling.value;
    if (description.length < 3) return;
    const newTask = create(description, currentIndex, completed);

    const afterAddNew = [...allTasks, newTask];

    const { appendTask } = Handlers;
    appendTask(newTask);

    resetData(afterAddNew);
  }

  static removeTask(e) {
    if (e.target.className === 'remove-item') {
      const index = e.target.getAttribute('data-index');

      const { allTasks, resetData } = Data;

      allTasks.splice(index, 1);
      allTasks.forEach((item, index) => { item.index = index; });

      resetData(allTasks);

      const existingLists = document.querySelectorAll('.task-item');
      existingLists.forEach((item) => item.remove());

      const { renderList } = Handlers;
      renderList(allTasks);
    }
  }

  static appendTask(task) {
    const listItem = `
    <li class="task-item" title="Double click description to edit">
        <p>
            <span>
                <label for="task list"> 
                <input class="status"  data-index="${task.index}" type="checkbox" />
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
        <li class="task-item" title="Double click description to edit"> 
            <p>
                <span>
                    <label for="task list"> 
                        <input  class="status"  
                                data-index="${index}" 
                                type="checkbox"${task.completed ? 'checked' : ''} 
                        />
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
    const { allTasks, resetData } = Data;
    const afterRemovedCompleted = allTasks.filter((task) => task.completed !== true);

    afterRemovedCompleted.forEach((item, index) => { item.index = index; });

    resetData(afterRemovedCompleted);

    const existingLists = document.querySelectorAll('.task-item');
    existingLists.forEach((item) => item.remove());

    const { renderList } = Handlers;
    renderList(afterRemovedCompleted);
  }

  static handleUpdate(e) {
    if (e.target.className === 'description') {
      const initialText = e.target.textContent;
      e.target.innerHTML = `
        <p>
            <input type="text" placeholder="${initialText}"/> <br/>
            <button class="update">Update</button>  
            <button  data-initialtext="${initialText}" class="cancel">Cancel</button>
        </p>
        `;
    }

    if (e.target.className === 'cancel') {
      e.target.parentElement.parentElement
        .textContent = e.target.getAttribute('data-initialtext');
    }

    if (e.target.className === 'update') {
      const taskIndex = e.target.parentElement
        .parentElement.previousElementSibling
        .getAttribute('data-index');

      const { allTasks, resetData } = Data;
      const curretInput = e.target.parentElement.querySelector('input');

      if (curretInput.value.trim().length > 2) {
        allTasks[taskIndex].description = curretInput.value;

        resetData(allTasks);
        e.target.parentElement.parentElement.textContent = curretInput.value;
      }
    }
  }
}

export default Handlers;
