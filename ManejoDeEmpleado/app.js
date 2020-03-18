const app = angular.module('myApp', ['ui.router'], function ($stateProvider, $urlRouterProvider) {
    var empleadosState = {
        name: 'empleados',
        url: '/empleados',
        templateUrl: './views/listOfEmployees.html'
    }

    var agregarState = {
        name: 'agregar',
        url: '/agregar',
        templateUrl: './views/addEmployee.html'
    }
    $stateProvider.state(agregarState);
    $stateProvider.state(empleadosState);
});