import status from './status.js';

const list = document.querySelector('ul');
const newInput = document.querySelector('.new-task');
const errorMessage = document.querySelector('.error');

const updateStorage = (localTasks, tasks) => {
  localStorage.setItem(localTasks, JSON.stringify(tasks));
  return localStorage.getItem(`${localTasks}`) ? JSON.parse(localStorage.getItem(`${localTasks}`)) : [];
};
class List {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  }

   removeList = (task) => {
     this.tasks = this.tasks.filter((t) => t !== task);
     updateStorage('tasks', this.tasks);
     list.innerHTML = '';
     return this.tasks;
   };

    addList = (task) => {
      this.tasks.push(task);
      updateStorage('tasks', this.tasks);
      newInput.value = '';
      errorMessage.classList.add('error');
      return this.tasks;
    };

    sort = () => {
      for (let i = 0; i < this.tasks.length; i += 1) {
        this.tasks[i].index = i + 1;
      }
      updateStorage('tasks', this.tasks);
    };

    updateList = (task, t, icon) => {
      icon.classList.toggle('fa-pen-to-square');
      icon.classList.toggle('fa-check');
      task.readOnly = false;
      task.focus();
      task.addEventListener('input', function update() {
        task.value = this.value;
        t.description = task.value;
      });
    };

      completeUpdate = (task) => {
        task.readOnly = true;
        list.innerHTML = '';
        updateStorage('tasks', this.tasks);
      };

      display = () => {
        list.innerHTML = this.tasks.sort((a, b) => a.index - b.index).reduce((output, task) => (
          `${output
          }
                   <li>
                   <div class="to-do-list-container">
                   <div class="list-input-container">
                   <input class="check-list" type="checkbox" id="myCheckbox" name="myCheckbox" ${task.completed ? 'checked' : ''}>
                   <input class="task" value='${task.description}' readonly/>
                   </div>
                   <div class="list-btn-container">
                   <button class="edit"><i class="edit-icon fa-solid fa-pen-to-square"></i></button>
                   <button class="delete"><i class="fa-solid fa-trash"></i></button>
                   </div>
                   </div>
                   </li>
                  `
        ), '');
        const deleteList = document.querySelectorAll('.delete');
        deleteList.forEach((btn, index) => {
          btn.addEventListener('click', () => {
            this.removeList(this.tasks[index]);
            this.sort();
            this.display();
          });
        });
        const editList = document.querySelectorAll('.edit');
        const inputTask = document.querySelectorAll('.task');
        const editIcon = document.querySelectorAll('.edit-icon');
        editList.forEach((btn, index) => {
          let c = 0;
          btn.addEventListener('click', () => {
            if (c % 2 === 0) {
              this.updateList(inputTask[index], this.tasks[index], editIcon[index]);
              c += 1;
            } else {
              this.completeUpdate(inputTask[index]);
              this.display();
              c += 1;
            }
          });
        });

        const checkList = document.querySelectorAll('.check-list');
        checkList.forEach((btn, index) => {
          btn.addEventListener('click', () => {
            status(this.tasks[index]);
            updateStorage('tasks', this.tasks);
          });
        });
      };
}

export { List, updateStorage };