interface TodoItem {
    id: number;
    title: string;
    completed: boolean;
}

class TodoList {
    private todos: TodoItem[] = [];
    private nextId: number = 1;

    addTodo(title: string): TodoItem {
        const todo: TodoItem = {
            id: this.nextId++,
            title,
            completed: false
        };
        this.todos.push(todo);
        return todo;
    }

    removeTodo(id: number): boolean {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index === -1) return false;
        this.todos.splice(index, 1);
        return true;
    }

    toggleTodo(id: number): boolean {
        const todo = this.todos.find(todo => todo.id === id);
        if (!todo) return false;
        todo.completed = !todo.completed;
        return true;
    }

    displayTodos(): void {
        console.log('\n=== Todo List ===');
        if (this.todos.length === 0) {
            console.log('No todos yet!');
            return;
        }
        this.todos.forEach(todo => {
            console.log(`ID: ${todo.id} | ${todo.title} ${todo.completed ? '[✓]' : '[ ]'}`);
        });
    }

    getTodos(): TodoItem[] {
        return [...this.todos];
    }
}

// Example usage
const todoList = new TodoList();

function main() {
    const todoList = new TodoList();
    
    // Add some example todos
    todoList.addTodo('Learn TypeScript');
    todoList.addTodo('Build Todo App');
    
    // Display todos
    todoList.displayTodos();
    
    // Toggle first todo
    todoList.toggleTodo(1);
    
    // Display updated list
    todoList.displayTodos();
}

// Run the application
main();
