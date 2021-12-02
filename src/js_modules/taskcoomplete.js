const Status = (() => {
  const updateStatus = (checkbox, tasks) => {
    const status = tasks[checkbox.id];
    if (status.completed) {
      status.completed = false;
    } else {
      status.completed = true;
    }
  };
  return { updateStatus };
})();
export default Status;