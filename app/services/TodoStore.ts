export class TodoStore {
    todoList: Array<TodoItem>;

    constructor() {
        this.todoList = [];
    }

    add(item: string) {
        this.todoList.unshift(new TodoItem(item));
        this.sortList();
    }


    sortList() {
        this.todoList.sort(function(a: TodoItem, b: TodoItem) {
            if (a.done) {
                if (b.done) {
                    return a.timeCreated > b.timeCreated ? 1 : -1;
                } else {
                    return 1;
                }
            } else {
                if (b.done) {
                    return -1;
                } else {
                    return a.timeCreated > b.timeCreated ? 1 : -1;
                }
            }
        });
    }
}

export class TodoItem {
    text: string;
    done: boolean;
    timeCreated: number;

    constructor(text: string) {
        this.text = text;
        this.done = false;
        this.timeCreated = (new Date()).valueOf();
    }
}
