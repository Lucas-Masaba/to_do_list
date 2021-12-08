jest.mock('./data');
import Handlers from './handlers'
// jest.mock('./handlers');

describe('Test for remove item', () => {
  test('item is removed from the array', () => {
    document.body.innerHTML = '';
    const event = {
      target: {
        className: 'remove-item',
        getAttribute(string) {
          return 0;
        }
      }
    };
    // const allTasks = [
    //   { 
    //     description: 'Task 1', 
    //     index: 0,
    //     completed: false,
    //   },
    //   { 
    //     description: 'Task 2', 
    //     index: 1,
    //     completed: true,
    //   },
    // ];
    expect(Handlers.removeTask(event)).toHaveLength(1);
  })
})