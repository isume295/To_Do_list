/**
 * @jest-environment jsdom
 */

import { updateStorage, List } from '../modules/taskList.js';
import Task from '../modules/tasks.js';

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

    expect(updateStorage('tasks', list)).toEqual([1, { task: 'task1', index: 1, status: false }]);
  });
});

describe('test updateStorage method', () => {
  document.body.innerHTML = `        <div class="main-container">
  <label class="error">error</label>
  <div class="list-container">
    <h1 class="title">Todays to do 😁</h1>
    <form class="add">
        <input class="new-task" type="text" name="task" placeholder="Add to do list"/>
        <button class="add-list" type="submit"><i class="fa-solid fa-plus"></i></button>
    </form>
    <ul class="lists">
    </ul>
    <div class="clear"><button class="clearAll">clear all completed</button></div>
  </div>
  </div>`;
  const newInput = document.querySelector('.new-task');
  const errorMessage = document.querySelector('.error');
  const listCtn = document.querySelector('.lists');
  const list = new List();
  const task1 = new Task('item1', 1);
  const task2 = new Task('item2', 2);
  const task3 = new Task('item3', 3);
  const task4 = new Task('item4', 4);
  [task1, task2, task3, task4].forEach((element) => {
    list.addList(element, newInput, errorMessage);
  });
  list.display(listCtn);
  const inputTask = document.getElementsByClassName('task');

  test('Update first element', () => {
    const taskTest = new Task('test', 1);
    inputTask[0].value = 'test';

    expect(list.updateDescrip(inputTask[0].value, 0)).toEqual(taskTest);
  });

  test('Update third element', () => {
    const taskTest1 = new Task('test', 3);
    inputTask[2].value = 'test';

    expect(list.updateDescrip(inputTask[2].value, 2)).toEqual(taskTest1);
  });
});