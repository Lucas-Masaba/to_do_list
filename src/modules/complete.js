export default class StatusReport {
  static statusUpdate(checkbox, tasks) {
    const status = tasks[checkbox.id];
    if (status.completed) {
      status.completed = false;
    } else {
      status.completed = true;
    }
    return this.statusUpdate;
  }
}