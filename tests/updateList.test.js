/**
 * @jest-environment jsdom
 */

import { updateStorage } from '../modules/taskList.js';

describe('test updateStorage method', () => {
  const list = [];

  test('Empty local storage', () => {
    expect(updateStorage('tasks', list)).toEqual([]);
  });

  test('add array with 1 element to the local storage', () => {
    list.push(1);
    expect(updateStorage('tasks', list)).toEqual([1]);
  });

  test('add array with an object to local storage', () => { 
    list.push({ task: 'task1', index: 1, status: false });
    expect(updateStorage('tasks', list)).toEqual([1, { task: 'task1', index: 1, status: false}]);
  });
});