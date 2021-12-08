export default class Handlers {
    static removeTask(index, allTasks) {
        allTasks.splice(index, 1);
        allTasks.forEach((item, index) => { item.index = index; });
        return allTasks
      }
}