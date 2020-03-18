moduloEmpleado.controller('ListadoEmpleadosCtrl', ['$scope', 'EmpleadoSrv', function($scope, EmpleadoSrv) {

    $scope.personas = [{}];

    var servicioEmpleado = new EmpleadoSrv({x: 'x', y: 95});

}]);


moduloEmpleado.factory('EmpleadoSrv', ['$http', '$q', function($http, $q) {

     function Empleado() {
        console.log(arguments);
     };

    Empleado.prototype.buscarEmpleados = function(nombre = null, telefono = null) {
        var deferred =  $q.defer();
        var listadoEmpleados = [{nombre: 'Joseph'}];

        deferred.resolve(listadoEmpleados);
        /*
        $http.post('api/empleado/buscarEmpleados', { nombre: nombre, telefono: telefono })
        .then(function(results) {
            deferred.resolve(results.data);
        })
        .catch(function(err) {
            deferred.reject(err);
        })*/

        return deferred.promise;
    };

    return Empleado;

}])