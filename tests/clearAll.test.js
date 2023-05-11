/**
 * @jest-environment jsdom
 */

import clearAllFn from '../modules/clearAll.js';
import Task from '../modules/tasks.js';
import { List } from '../modules/taskList.js';

describe('test clearAllFn function', () => {
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
  const list = new List();
  const task1 = new Task('item1', 1);
  const task2 = new Task('item2', 2);
  const task3 = new Task('item3', 3);
  const task4 = new Task('item4', 4);
  const task5 = new Task('item5', 5);

  [task1, task2, task3, task4, task5].forEach((element) => {
    list.addList(element, newInput, errorMessage);
  });

  test('delete task1 from the list', () => {
    task1.completed = true;
    expect(clearAllFn(list)).toEqual([task2, task3, task4, task5]);
  });

  test('delete task2 and task3 from the list', () => {
    task2.completed = true;
    task3.completed = true;
    expect(clearAllFn(list)).toEqual([task4, task5]);
  });

  test('delete task5 from the list', () => {
    task5.completed = true;
    expect(clearAllFn(list)).toEqual([task4]);
  });
});
