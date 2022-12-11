const connection = require('../db/connection')

class coorpateInfo {
    constructor(connection){
        this.connection = connection;

    }
    everyWorker(){
        return this.connection.promise().query(
            `SELECT employee.id,
             employee.first_name,
              employee.last_name,
               role.title,
                department.name AS department,
                 role.salary, 
                CONCAT(manager.first_name, ' ', manager.last_name)
                 AS manager FROM employee LEFT JOIN role on employee.role_id = role.id
                  LEFT JOIN department on role.department_id = department.id
                   LEFT JOIN employee manager on manager.id = employee.manager_id;`
        ); 
    } 
         updateRole(employee) {
            return this.connection.promise().query(
                "UPDATE employee SET role_id = ? WHERE id = ?",
                [roleId, employeeId]
            );
        } 

        employeeRoles() {
            return this.connection.promise().query(
                "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
            );
        }
         GiveRole(role){
            return this.connection.promise().query("INSERT INTO role SET ?", role);
        }

          entireDepartment() {
            return this.connection.promise().query(
                "SELECT department.id, department.name FROM department;"
            );
        }

        Manager(employeeId) {
            return this.connection.promise().query(
                "SELECT id, first_name, last_name FROM employee WHERE id != ?",
                employeeId
            );
        }
       
        assignDepartment(department){
            return this.connection.promise().query("INSERT INTO department SET ?", department);
        }
        
}
module.exports = new coorpateInfo(connection)