import Handlers from './handlers.js';
import Data from './data.js';

jest.mock('./handlers');

let allTasks = [];

beforeEach(() => {
  document.body.innerHTML = `
  <ul>
    <button id="clear-all">Clear all</button>
  </ul>`;
  allTasks = [
    {
      description: 'Task 1',
      index: 0,
      completed: false,
    },
    {
      description: 'Task 2',
      index: 1,
      completed: true,
    },
    {
      description: 'Task 3',
      index: 2,
      completed: true,
    },
    {
      description: 'Task 4',
      index: 3,
      completed: false,
    },
  ];
})



describe('Test for remove item', () => {
  test('item is removed from the array', () => {
    expect(Handlers.removeTask(0, allTasks)).toHaveLength(3);
  });

  test('item is removed from the array in the DOM', () => {
    Handlers.renderList(allTasks);
    Handlers.removeTask(0, allTasks);
    const lis = document.querySelectorAll('.task-item');
    expect([...lis]).toHaveLength(3);
  });
});

describe('test add item', () => {
  test('test add item', () => {
    Handlers.handleAddTask('description', false);
    const lis = document.querySelectorAll('.task-item');
    expect([...lis]).toHaveLength(1);
  });
});

describe('test edit description of item', () => {
  beforeEach(() => {
    Data.resetData(allTasks);
    Handlers.renderList(allTasks);
    Handlers.handleUpdate(0,'new task description')
  })
  
  test('test edit description', () => {
    expect(Data.allTasks[0].description).toBe('new task description');
  });

  test('test edit description in DOM', () => {
    const descriptions = document.querySelectorAll('.description');
    expect([...descriptions][0].textContent).toBe('new task description');
  });
});

describe('test update completed task', () => {
  beforeEach(() => {
    Data.resetData(allTasks);
  })

  test('test a task change completed value to true ', () => {
    Handlers.handleCheckBoxChange(true, allTasks[0].index)
    expect(Data.allTasks[0].completed).toBeTruthy();
  })

  test('test a task change completed value to false ', () => {
    Handlers.handleCheckBoxChange(false, allTasks[1].index)
    expect(Data.allTasks[1].completed).toBeFalsy();
  })
})

describe('test that completed tasks are cleared', () => {
  test('items is removed from the array', () => {
    expect(Data.allTasks).toHaveLength(2)
  })

  test('items is removed from the array in the DOM', () => {
    const lis = document.querySelectorAll('.task-item');
    expect([...lis]).toHaveLength(2);
  })

  test('index is in order', () => {
    expect(Data.allTasks[1].index).toBe(1);
  })
})