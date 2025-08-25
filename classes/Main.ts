import { Employee } from './Employee';

// create object for Employee class
let emp = new Employee();
let sal: number = emp.getSalary('peter');

console.log('salary of peter is:', sal);