/* 
Access modifiers:
Public: anywhere
Private: only within the class
Protected: only within the class + within the child class
 */

export class Employee {
    public name: string;
    public age: number;
    private salary: number;
    protected isActive: boolean;

    constructor(name: string, age: number, salary: number, isActive: boolean) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isActive = isActive;

    }

    // if we don't give any acces modifier then by default that would be the public.

    public drive(): void {
        console.log(this.name);
        console.log(this.salary);

    }

    public getSalary(): number {
        return this.salary;
    }
}

let e1 = new Employee('vishal', 30, 12.33, true);
console.log(e1.name);
console.log(e1.age);
// console.log(e1.isActive);
// console.log(e1.salary);