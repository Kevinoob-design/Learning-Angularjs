app.factory('manageEmployeeSrv', [function () {

    function Empleado() {
        console.log(arguments);
    };

    Empleado.prototype.listEmployee = [];
    
    Empleado.prototype.add = function (employee, listEmployee) {
        this.listEmployee.push(employee);
        return this.listEmployee;
    }

    Empleado.prototype.remove = function (listEmployee, index){
        if (window.confirm("Desea eliminar al empleado?")) {
            this.listEmployee.splice(index, 1);
            return this.listEmployee;
        }
    }

    Empleado.prototype.update = function (listEmployee, employee, index){
        this.listEmployee[index] = employee;
        return this.listEmployee;
    }

    return Empleado;
}])