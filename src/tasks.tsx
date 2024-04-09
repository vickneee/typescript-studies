const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');
const taskListElement = document.querySelector<HTMLUListElement>('.list');

// task type
type Task = {
    description: string;
    isCompleted: boolean;
};

const tasks: Task[] = loadTasks();

tasks.forEach((task) => {
    renderTasks(task);
});

function loadTasks():Task[] {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        return JSON.parse(storedTasks);
    }
    return [];
}

taskForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskDescription = formInput?.value;
    if (taskDescription) {
        const task: Task = {
            description: taskDescription,
            isCompleted: false,
        };
        // add task to list
        addTask(task);
        // render tasks
        // renderTasks(task);
        // update local storage
        updateLocalStorage();
        // console.log(taskDescription);
        formInput.value = '';
        return;
    }
    alert('Please enter a task description!');
});

function addTask(task: Task) {
    tasks.push(task);
    renderTasks(task);
    console.log(tasks);
}

function createCheckbox(task: Task, taskElement: HTMLElement) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = task.isCompleted;
    checkbox.addEventListener('change', () => {
        task.isCompleted = !task.isCompleted;
        if (task.isCompleted) {
            taskElement.style.textDecoration = 'line-through';
        } else {
            taskElement.style.textDecoration = 'none';
        }
        updateLocalStorage();
    });
    return checkbox;
}

function createDeleteButton(task: Task, taskElement: HTMLElement) {
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.addEventListener('click', () => {
        const index = tasks.indexOf(task);
        if (index > -1) {
            tasks.splice(index, 1);
        }
        taskElement.remove();
        updateLocalStorage();
    });
    return deleteButton;
}

function createActionContainer(task: Task, taskElement: HTMLElement) {
    const actionContainer = document.createElement('div');
    actionContainer.className = 'action-container';
    actionContainer.appendChild(createCheckbox(task, taskElement));
    actionContainer.appendChild(createDeleteButton(task, taskElement));
    return actionContainer;
}

function renderTasks(task: Task) {
    const taskElement = document.createElement('li');
    taskElement.textContent = task.description;
    if (task.isCompleted) {
        taskElement.style.textDecoration = 'line-through';
    }
    taskElement.appendChild(createActionContainer(task, taskElement));
    taskListElement?.appendChild(taskElement);
}

// get tasks from local storage
function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
