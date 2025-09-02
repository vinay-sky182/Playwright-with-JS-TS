import { Employee } from './methodpractice.ts'

let emp = new Employee();
let salary: number = emp.getSalary('peter');
console.log('Salary is:', salary);