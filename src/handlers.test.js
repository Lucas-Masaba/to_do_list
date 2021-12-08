jest.mock('./handlers');
import Handlers from './handlers'

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
  })
})