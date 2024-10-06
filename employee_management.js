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