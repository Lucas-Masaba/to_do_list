import Data from './data.js'

describe('Test for Add item', () => {
  test('Object is created', () => {
      const data = Data.create('Description', '01', 'false' )
      expect(data).toBeInstanceOf(Object);
  })
})

describe('Test for Delete item', () => {
  test('Add a test', () => {
    expect('string').toMatch('string');
  })
})