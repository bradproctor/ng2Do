export class TodoStore {
    todoList: Array<TodoItem>;

    constructor() {
        this.todoList = [];
    }

    add(item: string) {
        this.todoList.unshift(new TodoItem(item));
    }
}

export class TodoItem {
    text: string;
    done: boolean;

    constructor(text: string) {
        this.text = text;
        this.done = false;
    }
}
