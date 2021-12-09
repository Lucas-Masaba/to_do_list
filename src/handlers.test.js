import Handlers from './handlers.js';

jest.mock('./handlers');

describe('Test for remove item', () => {
  test('item is removed from the array', () => {
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
    expect(Handlers.removeTask(0, allTasks)).toHaveLength(1);
  });

  test('item is removed from the array in the DOM', () => {
    document.body.innerHTML = `
    <ul>
      <button id="clear-all">Clear all</button>
    </ul>`;
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
    Handlers.renderList(allTasks);
    Handlers.removeTask(0, allTasks);
    const lis = document.querySelectorAll('.task-item');
    expect([...lis]).toHaveLength(1);
  });
});

describe('test add item', () => {
  test('test add item', () => {
    document.body.innerHTML = `
    <ul>
      <button id="clear-all">Clear all</button>
    </ul>`;
    Handlers.handleAddTask('description', false);
    const lis = document.querySelectorAll('.task-item');
    expect([...lis]).toHaveLength(1);
  });
});