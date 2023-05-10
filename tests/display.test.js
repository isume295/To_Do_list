/**
 * @jest-environment jsdom
 */

import { List } from '../modules/taskList.js';
import Task from '../modules/tasks.js';

describe('test diplay method after adding/deleting a task', () => {
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
  const listCtnn = document.querySelector('ul');
  const task1 = new Task('item1', 1);
  const task2 = new Task('item2', 2);
  const task3 = new Task('item3', 3);

  test('display task1', () => {
    list.addList(task1, newInput, errorMessage);
    const child = list.display(listCtnn).children;
    expect(child).toHaveLength(1);
  });
  test('append task2 and display', () => {
    list.addList(task2, newInput, errorMessage);
    const child = list.display(listCtnn).children;
    expect(child).toHaveLength(2);
  });
  test('append task3 and display', () => {
    list.addList(task3, newInput, errorMessage);
    const child = list.display(listCtnn).children;
    expect(child).toHaveLength(3);
  });

  test('removed task3 and display', () => {
    list.removeList(task3, listCtnn);
    const child = list.display(listCtnn).children;
    expect(child).toHaveLength(2);
  });

  test('removed task1 and display', () => {
    list.removeList(task2, listCtnn);
    const child = list.display(listCtnn).children;
    expect(child).toHaveLength(1);
  });

  test('display removed task1', () => {
    list.removeList(task1, listCtnn);
    const child = list.display(listCtnn).children;
    expect(child).toHaveLength(0);
  });
});
