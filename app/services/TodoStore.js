var TodoStore = (function () {
    function TodoStore() {
        this.todoList = [];
    }
    TodoStore.prototype.add = function (item) {
        this.todoList.unshift(new TodoItem(item));
        this.sortList();
    };
    TodoStore.prototype.sortList = function () {
        this.todoList.sort(function (a, b) {
            if (a.done) {
                if (b.done) {
                    return a.timeCreated > b.timeCreated ? -1 : 1;
                }
                else {
                    return 1;
                }
            }
            else {
                if (b.done) {
                    return -1;
                }
                else {
                    return a.timeCreated > b.timeCreated ? -1 : 1;
                }
            }
        });
    };
    return TodoStore;
})();
exports.TodoStore = TodoStore;
var TodoItem = (function () {
    function TodoItem(text) {
        this.text = text;
        this.done = false;
        this.timeCreated = (new Date()).valueOf();
    }
    return TodoItem;
})();
exports.TodoItem = TodoItem;
