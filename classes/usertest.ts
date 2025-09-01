import { Employee } from "./employee_data.ts";

class User extends Employee {

    constructor(name: string, age: number, salary: number, isActive: boolean) {
        super(name, age, salary, isActive);

    }

    start(): void {


        let u1 = new User('tom', 20, 12.33, true);
        console.log(u1.name);
        console.log(u1.age);
        console.log(u1.isActive);
        // console.log(u1.salary);
        console.log(u1.getSalary());
    }


}