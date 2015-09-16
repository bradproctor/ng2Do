///<reference path="../typings/angular2/angular2.d.ts"/>

import {Component, View, bootstrap, NgIf, NgFor} from 'angular2/angular2';
import {TodoStore} from 'services/TodoStore';

@Component({
    selector: 'todo-app',
    appInjector: [TodoStore]
})
@View({
    templateUrl: 'templates/todo.html',
    directives: [NgFor, NgIf]
})
class TodoApp {
    todoStore: TodoStore;

    constructor(todoStore: TodoStore) {
        this.todoStore = todoStore;
    }

    add($event, newTodo) {
        if (newTodo.value !== '') {
            if ($event.which === 13) {
                this.todoStore.add(newTodo.value);
                newTodo.value = '';
            }
        }
    }

    toggleTodoState(todo) {
        todo.done = !todo.done;
        this.todoStore.sortList();
    }
}

bootstrap(TodoApp);