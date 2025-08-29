export class Employee {
    getSalary(empName: string): number {

        if (empName === 'tom') {
            return 12.33;
        }
        else if (empName === 'peter') {
            return 14.33;
        }
        else {
            console.log('employee not found', empName);
            return -1;
        }
    }
}

let emp = new Employee();
let salary: number = emp.getSalary('tom');
console.log('Salary is:', salary);


