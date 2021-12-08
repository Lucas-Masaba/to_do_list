export default class Handlers {
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
    const clearAll = document.getElementById("clear-all");
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
                                      task.completed ? "checked" : ""
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
            `
    );

    clearAll?.insertAdjacentHTML("beforebegin", listItems.join(""));
  }
}
