import status from '../modules/status.js';
import Task from '../modules/tasks.js';

describe('test add method', () => {
  const task1 = new Task('item1', 1);
  const testTrue = new Task('item1', 1, true);
  const testFalse = new Task('item1', 1, false);

  test('Cchange status from false to true', () => {
    expect(status(task1)).toEqual(testTrue);
  });

  test('Cchange status from true to false', () => {
    expect(status(task1)).toEqual(testFalse);
  });
});