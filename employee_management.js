//Employee Class
class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department; //initializing employee class
        
    }
    getDetails() {
        return `Name: ${this.name}, Salary: ${this.salary}, Position: ${this.position}, Department: ${this.department}`;
    }
}

// Department class

class Department {
    constructor(name) {
        this.name = name;
        this.employees = []; 
    }

    addEmployee(employee) {  //Adds an Employee object to the employees array.
        this.employees.push(employee);
    }

    getDepartmentSalary() {  //Returns the total salary of all employees in the department
        let totalSalary = 0;
        for (let employee of this.employees) {
            totalSalary += employee.salary;
        }
        return totalSalary;
    }
}

//Manager class inheriting from employee

class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department);
        this.bonus = bonus; //The manager’s bonus.
    }

    getDetails() {
        return `Name: ${this.name}, Salary: ${this.salary}, Position: ${this.position}, Department: ${this.department}, Bonus: ${this.bonus}`;
    }
}

