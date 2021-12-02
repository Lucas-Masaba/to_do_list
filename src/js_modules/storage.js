const Store = (() => {
  const setLocalStorage = (tasks) => {
    localStorage.setItem('Tasks', JSON.stringify(tasks));
  };

  const getLocalStorage = () => {
    const localData = JSON.parse(localStorage.getItem('Tasks'));
    return localData;
  };
  return { setLocalStorage, getLocalStorage };
})();
export default Store;