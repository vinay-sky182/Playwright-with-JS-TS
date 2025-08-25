export class Employer {
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

    getData(): void {
        console.log('emp data');
    }
}

let emp1 = new Employer('tom', 45, 12.33, true);
console.log('emp1:', emp1);