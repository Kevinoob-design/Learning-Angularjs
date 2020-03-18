app.controller('mainController', ['$scope', 'manageEmployeeSrv', '$state', ($scope, manageEmployee, $state) => {
    $scope.empleados = [];
    $scope.empleado = {
        nombre: '',
        apellido: '',
        numero: '',
        usuario: '',
        clave: ''
    };

    $scope.error = '';
    $scope.action = 'Guardar empleado'

    $scope.activeIndex;

    $scope.isEdit = false;
    $scope.currentIndex = null;

    var employee = new manageEmployee();

    limpiarCampos = () => {
        $scope.empleado = {
            nombre: '',
            apellido: '',
            numero: '',
            usuario: '',
            clave: ''
        }
    }

    $scope.submit = () => {
        if ($scope.isEdit) {
            $scope.editarEmpleado($scope.activeIndex);
            $scope.isEdit = false;
        }
        else {
            $scope.addEmpleado();
        }
    }

    $scope.activarEdicion = (index) => {
        empleado = $scope.empleados[index];

        $scope.empleado = {
            nombre: empleado.nombre,
            apellido: empleado.apellido,
            numero: empleado.numero,
            usuario: empleado.usuario,
            clave: empleado.clave
        }

        $scope.currentIndex = index;
        $scope.isEdit = true;
        $scope.activeIndex = index;
        $scope.action = 'Grabar edicion'
        $state.go('agregar', {}, { reload: false, inherit: false });
    }

    $scope.addEmpleado = () => {
        $scope.empleados = employee.add($scope.empleado, $scope.empleados);
        limpiarCampos();
        $state.go('empleados', {}, { reload: false, inherit: false });

    }

    $scope.removeEmpleado = (index) => {
        $scope.empleados = employee.remove($scope.empleados, index);
    }

    $scope.editarEmpleado = () => {
        $scope.empleados = employee.update($scope.empleados, $scope.empleado, $scope.activeIndex);
        limpiarCampos();
        $scope.action = 'Guardar empleado';
        $state.go('empleados', {}, { reload: false, inherit: false });
    }
}]);