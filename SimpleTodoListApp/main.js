// Simple Todo List App
const taskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;
    const li = createTaskElement(taskText);
    taskList.appendChild(li);
    taskInput.value = '';
    taskInput.focus();
}

function createTaskElement(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;
    span.className = 'task-text';

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';
    editBtn.addEventListener('click', function() {
        if (li.classList.contains('editing')) return;
        li.classList.add('editing');
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;
        input.className = 'edit-input';
        li.replaceChild(input, span);
        input.focus();
        // Save on Enter or blur
        input.addEventListener('keydown', function(ev) {
            if (ev.key === 'Enter') finishEdit();
        });
        input.addEventListener('blur', finishEdit);
        function finishEdit() {
            const newText = input.value.trim();
            if (newText) {
                span.textContent = newText;
                li.replaceChild(span, input);
            } else {
                taskList.removeChild(li);
            }
            li.classList.remove('editing');
        }
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    return li;
}

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') addTask();
}); 