class TodoItem {
    constructor(id, title, completed) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}

class TodoList {
    constructor() {
        this.todos = [];
        this.nextId = 1;
        this.editingTodo = null;
    }

    addTodo(title) {
        const todo = new TodoItem(this.nextId++, title, false);
        this.todos.push(todo);
        this.updateUI();
        return todo;
    }

    removeTodo(id) {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index === -1) return false;
        this.todos.splice(index, 1);
        this.updateUI();
        return true;
    }

    editTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (!todo) return;
        
        // Create edit input
        const input = document.createElement('input');
        input.type = 'text';
        input.value = todo.title;
        input.className = 'todo-edit-input';
        
        // Add event listeners
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.saveEdit(id, input.value);
            }
        });
        
        input.addEventListener('blur', () => {
            this.saveEdit(id, input.value);
        });
        
        // Replace span with input
        const span = document.querySelector(`.todo-item[data-id="${id}"] span`);
        if (span) {
            span.replaceWith(input);
            input.focus();
        }
    }

    saveEdit(id, newTitle) {
        const todo = this.todos.find(todo => todo.id === id);
        if (!todo) return;
        
        todo.title = newTitle.trim();
        this.updateUI();
    }

    toggleTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (!todo) return false;
        todo.completed = !todo.completed;
        this.updateUI();
        return true;
    }

    displayTodos() {
        console.log('\n=== Todo List ===');
        if (this.todos.length === 0) {
            console.log('No todos yet!');
            return;
        }
        this.todos.forEach(todo => {
            console.log(`ID: ${todo.id} | ${todo.title} ${todo.completed ? '[✓]' : '[ ]'}`);
        });
    }

    getTodos() {
        return [...this.todos];
    }

    updateUI() {
        const todoListElement = document.getElementById('todoList');
        if (!todoListElement) return;

        todoListElement.innerHTML = '';
        this.todos.forEach(todo => {
            const todoElement = document.createElement('div');
            todoElement.className = 'todo-item';
            todoElement.setAttribute('data-id', todo.id);
            todoElement.innerHTML = `
                <span>${todo.title}</span>
                <button onclick="todoList.toggleTodo(${todo.id})">${todo.completed ? 'Undo' : 'Complete'}</button>
                <button onclick="todoList.editTodo(${todo.id})">Edit</button>
                <button onclick="todoList.removeTodo(${todo.id})">Remove</button>
            `;
            if (todo.completed) {
                todoElement.classList.add('completed');
            }
            todoListElement.appendChild(todoElement);
        });
    }
}

// Create todo list instance
todoList = new TodoList();

// Add example todos
todoList.addTodo('Learn TypeScript');
todoList.addTodo('Build Todo App');

// Add event listener for Enter key
const newTodoInput = document.getElementById('newTodoInput');
if (newTodoInput) {
    newTodoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addNewTodo();
        }
    });
}

// Function to add a new todo
function addNewTodo() {
    const input = document.getElementById('newTodoInput');
    if (input && input.value.trim()) {
        todoList.addTodo(input.value.trim());
        input.value = '';
    }
}
