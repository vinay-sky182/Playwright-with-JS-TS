class Employee {
    // method to get salary of an employee
    getSalary(empName) {
        if (empName === 'tom') {
            return 12.33;
        }
        else if (empName === 'peter') {
            return 15.55;
        }
        else {
            console.log(`employee not found... ${empName}`);
            return -1;
        }
    }
}
// create object for Employee class
let emp = new Employee();
let sal = emp.getSalary('tom');
console.log('salary of tom is:', sal);
export { Employee };
console.log("-------------------------------------------------------------------------");
