import './style.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/css/all.css';
import Task from '../modules/tasks.js';
import { List, updateStorage } from '../modules/taskList.js';

const newInput = document.querySelector('.new-task');
const errorMessage = document.querySelector('.error');
const listCtn = document.querySelector('ul');

const list = new List();

const clearAllFn = (list) => {
  list.tasks = list.tasks.filter((task) => task.completed === false);
  updateStorage('tasks', list.tasks);
  return list.tasks;
};

window.onload = () => {
  list.display(listCtn);
};

document.querySelector('.add-list').addEventListener('click', (e) => {
  e.preventDefault();
  const i = list.tasks.length;
  if (newInput.value === '') {
    errorMessage.innerHTML = 'Please enter a task to add to the to-do list';
    errorMessage.classList.remove('error');
    document.querySelector('.list-container').classList.add('shake');
    setTimeout(() => {
      document.querySelector('.list-container').classList.remove('shake');
    }, 1000);
  } else {
    const newTask = new Task(newInput.value, i + 1);
    list.addList(newTask, newInput, errorMessage);
    list.display(listCtn);
  }
});

const clearAll = document.querySelector('.clearAll');
clearAll.addEventListener('click', () => {
  clearAllFn(list);
  list.display(listCtn);
});