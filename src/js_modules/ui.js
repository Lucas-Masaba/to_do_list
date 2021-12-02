const UI = (() => {
  const statusUpdate = (target) => {
    const status = target.nextElementSibling;
    if(status.style.textDecoration === 'line-through') {
      status.style.textDecoration = 'none';
      return false;
    }
    status.style.textDecoration = 'line-through'
    return true;
  }
  const checkIfStatusUpdated = (tasks, checkbox) => {
    tasks.forEach((element) => {
      if (element.completed === true) {
        checkbox[element.id].nextElementSibling.style.textDecoration = 'line-through';

      }
    })
  }
  return { statusUpdate, checkIfStatusUpdated }
})()
export default UI;