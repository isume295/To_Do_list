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

  test('should first', () => {
    expect(list.addList(new Task('item1', 1), newInput, errorMessage)).toEqual([{ description: 'item1', index: 1, completed: false }]);
  });
});