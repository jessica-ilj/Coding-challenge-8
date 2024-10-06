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
    TotalCompensation() {
        return this.salary;  // Regular employees only have a salary, no bonus
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
    //handle bonuses for managers
    calculateTotalSalaryWithBonus() {
        return this.employees.reduce((total, employee) => total + employee.TotalCompensation(), 0); //calculates the total salary for the department, including any bonuses for managers.
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
    TotalCompensation() {
        return this.salary + this.bonus; //calling new function that handles total compensation
    }
}

//Create Employees and Managers (just used the already given sample)
const alice = new Employee("Alice", 80000, "Developer", "Engineering");

const bob = new Employee("Bob", 75000, "Designer", "Marketing");

const charlie = new Manager("Charlie", 120000, "Engineering Manager", "Engineering", 20000);

const diana = new Manager("Diana", 130000, "Marketing Manager", "Marketing", 25000);

// Create Departments
const engineering = new Department("Engineering");

const marketing = new Department("Marketing");

// Add Employees and Managers to Departments
engineering.addEmployee(alice);

engineering.addEmployee(charlie);

marketing.addEmployee(bob);

marketing.addEmployee(diana);

// Calculate Total Salaries
console.log("Marketing Department Total Salary (No Bonus): $", marketing.getDepartmentSalary());
console.log("Marketing Department Total Salary (With Bonus): $", marketing.calculateTotalSalaryWithBonus());

console.log("Engineering Department Total Salary (No Bonus): $", engineering.getDepartmentSalary());
console.log("Engineering department Total Salary (With Bonus): $", engineering.calculateTotalSalaryWithBonus());

