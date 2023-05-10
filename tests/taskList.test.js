import { List } from '../modules/taskList.js';
import Task from '../modules/tasks.js';

describe('test add method', () => {
  const list = new List();

  test('should first', () => {
    expect(list.addList(new Task('item1', 1))).toEqual({ description: 'item1', index: 1, completed: false });
  });
});