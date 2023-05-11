import { updateStorage } from './taskList.js';

const clearAllFn = (list) => {
  list.tasks = list.tasks.filter((task) => task.completed === false);
  updateStorage('tasks', list.tasks);
  return list.tasks;
};

export default clearAllFn;