export const render = (tasks, tasksContainerElement) => {
    tasksContainerElement.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        const id = `task-${index}`;
        const labelElement = document.createElement('label');
        labelElement.innerText = task.title;
        labelElement.setAttribute('for', id);
        const checkboxElement = document.createElement('input');
        checkboxElement.type = 'checkbox';
        checkboxElement.title = task.title;
        checkboxElement.id = id;
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener('change', () => {
            task.done = !task.done;
        });
        tasksContainerElement.appendChild(taskElement);
    });
};
