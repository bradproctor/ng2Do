var TodoStore = (function () {
    function TodoStore() {
        this.todoList = [];
    }
    TodoStore.prototype.add = function (item) {
        this.todoList.unshift(new TodoItem(item));
    };
    return TodoStore;
})();
exports.TodoStore = TodoStore;
var TodoItem = (function () {
    function TodoItem(text) {
        this.text = text;
        this.done = false;
    }
    return TodoItem;
})();
exports.TodoItem = TodoItem;
