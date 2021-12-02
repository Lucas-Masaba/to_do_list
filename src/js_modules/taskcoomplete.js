// verify if checked
export const validate = (checkbox, tasksToDo) => {
  const box = document.querySelectorAll('#done');
  const status = tasksToDo[checkbox.id];
  if(!status.completed){
    status.completed = true;
  } else {
    status.completed = false;
  }
  return {validate}
}