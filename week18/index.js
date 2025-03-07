document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const clearTasks = document.getElementById('clearTasks');
    const noTasks = document.getElementById('noTasks');


    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    renderTasks();


    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            tasks.push({ text: taskText, completed: false });
            taskInput.value = '';
            saveTasks();
            renderTasks();
        }
    });


    clearTasks.addEventListener('click', () => {
        tasks = [];
        saveTasks();
        renderTasks();
    });

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox" id="task-${index}" ${task.completed ? 'checked' : ''} disabled>
                <label for="task-${index}">${task.text}</label>
            `;
            li.querySelector('input').addEventListener('change', () => {
                task.completed = !task.completed;
                saveTasks();
                renderTasks();
            });
            taskList.appendChild(li);
        });

        clearTasks.disabled = tasks.length === 0;
        noTasks.classList.toggle('hidden', tasks.length > 0);
    }

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});




