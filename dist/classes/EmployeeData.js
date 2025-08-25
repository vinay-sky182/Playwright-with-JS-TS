export class Employer {
    constructor(name, age, salary, isActive) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isActive = isActive;
    }
    getData() {
        console.log('emp data');
    }
}
let emp1 = new Employer('tom', 45, 12.33, true);
console.log('emp1:', emp1);
