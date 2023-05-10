/**
 * @jest-environment jsdom
 */

import { List } from '../modules/taskList.js';
import Task from '../modules/tasks.js';

describe('test add method', () => {
  const list = new List();
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
  const task1 = new Task('item1', 1);
  const task2 = new Task('item2', 2);
  const task3 = new Task('item3', 3);
  const task4 = new Task('item4', 4);

  test('First element', () => {
    expect(list.addList(task1, newInput, errorMessage)).toEqual([task1]);
  });

  test('Secont element', () => {
    expect(list.addList(task2, newInput, errorMessage)).toEqual([task1, task2]);
  });

  test('Third element', () => {
    expect(list.addList(task3, newInput, errorMessage)).toEqual([task1, task2, task3]);
  });

  test('Forth element', () => {
    expect(list.addList(task4, newInput, errorMessage)).toEqual([task1, task2, task3, task4]);
  });
});

describe('test remove method', () => {
  const list = new List();
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
  const listCtn = document.querySelector('ul');
  const task1 = new Task('item1', 1);
  const task2 = new Task('item2', 2);
  const task3 = new Task('item3', 3);
  const task4 = new Task('item4', 4);
  const tasks = [task1, task2, task3, task4];
  tasks.forEach((task) => list.addList(task, newInput, errorMessage));

  test('Remove task4', () => {
    expect(list.removeList(task4, listCtn)).toEqual([task1, task2, task3]);
  });

  test('Remove task2', () => {
    expect(list.removeList(task2, listCtn)).toEqual([task1, task3]);
  });

  test('Remove task1', () => {
    expect(list.removeList(task1, listCtn)).toEqual([task3]);
  });
});
