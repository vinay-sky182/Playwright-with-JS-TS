export class User {

    public name: string;
    public age: number;
    public salary: number;
    readonly shares: number = 1000;

    // readonly makes the variable immutable value of those vaiable cann't be changed.It usese the to provide the constant value

    // inside the typescript class we can not use the 'let','var' and 'const' keywords

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    drive(): void {
        console.log(`${this.name} is driving`);
    }

}

// create the object of the User class

/* let u1 = new User('Abhi', 30, 12.33);
u1.drive();

u1.age = 35;
console.log(u1.name, u1.age); */

// u1.shares = 100;

