import Data from '../data.js';

export default class Handlers {
  static handleCheckBoxChange(status, index) {
    const { updateData } = Data;
    updateData(status, index);
  }

  static removeTask(index, allTasks) {
    allTasks.splice(index, 1);
    allTasks.forEach((item, index) => {
      item.index = index;
    });

    const existingLists = document.querySelectorAll('.task-item');
    existingLists.forEach((item) => item.remove());

    const { renderList } = Handlers;
    renderList(allTasks);
    return allTasks;
  }

  static renderList(list) {
    const clearAll = document.getElementById('clear-all');
    list.forEach((item, index) => {
      item.index = index;
    });
    const listItems = list.map(
      (task, index) => `
            <li class="task-item" title="Double click description to edit"> 
                <p>
                    <span>
                        <label for="task list"> 
                            <input  class="status"  
                                    data-index="${index}" 
                                    type="checkbox"${
  task.completed ? 'checked' : ''
} 
                            />
                            <span  class="description"> ${
  task.description
} </span>
                        </label>
                    </span>
                </p>
                <p>
                    <i data-index="${index}" class="remove-item">&times</i>
                    <span class="drag-around">&#8942</span>
                </p>
            </li>
            `,
    );

    clearAll?.insertAdjacentHTML('beforebegin', listItems.join(''));
  }

  static handleAddTask(description, completed) {
    const { create } = Data;
    const currentIndex = document.querySelectorAll('.task-item').length;

    if (description.length < 3) return;
    const newTask = create(description, currentIndex, completed);

    const { appendTask } = Handlers;
    appendTask(newTask);
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
s
  static handleUpdate(index, newDescription) {
    const input = [...document.querySelectorAll('input[data-index]')].find(input => parseInt(input.dataset.index, 10) === index)
    const initialText = input.nextElementSibling.textContent;
    input.nextElementSibling.innerHTML = `
      <p>
          <input type="text" placeholder="${initialText}"/> <br/>
          <button class="update">Update</button>  
          <button  data-initialtext="${initialText}" class="cancel">Cancel</button>
      </p>
      `;
    const { allTasks, resetData } = Data;

    if (newDescription.length > 2) {
      allTasks[index].description = newDescription;

      resetData(allTasks);
      input.nextElementSibling.textContent = newDescription;
    }
  }
}
