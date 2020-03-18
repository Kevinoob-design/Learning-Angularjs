const app = angular.module('myApp', []);
app.controller('mainCtrl', ($scope) => {
    $scope.aMessage = 'Oli';
});

app.controller('todoListController', ($scope) => {
    $scope.todo = [];
    $scope.todoItem = '';

    $scope.onAdd = (newItem) => {
        console.log(newItem)
        $scope.todo.push({ todoItem: newItem });
        $scope.todoItem = '';
    }

    $scope.onRemove = (index) => {
        console.log(index);
        $scope.todo.splice(index, 1);
    };

    // $scope.todo = {
    //     items: ['Item1', 'Item2', 'Item2'],
    //     addToDoItem = (newItem) => {
    //         this.item.push(newItem);
    //     },
    //     removeToDoItem = (itemToBeRemove) => {

    //     }
    // }
});