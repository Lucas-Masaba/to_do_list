import Handlers from './handlers.js';
import Data from './data.js';

jest.mock('./handlers');

beforeEach(() => {
  document.body.innerHTML = `
  <ul>
    <button id="clear-all">Clear all</button>
  </ul>`; 
})

const allTasks = [
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
];

describe('Test for remove item', () => {
  test('item is removed from the array', () => {

    expect(Handlers.removeTask(0, allTasks)).toHaveLength(1);
  });

  test('item is removed from the array in the DOM', () => {
    Handlers.renderList(allTasks);
    Handlers.removeTask(0, allTasks);
    const lis = document.querySelectorAll('.task-item');
    expect([...lis]).toHaveLength(1);
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

// describe('test update completed task', () => {
//   test('')
// })