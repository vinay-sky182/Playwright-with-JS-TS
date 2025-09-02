export interface User {
    name: string;
    age: number;

    drive(): void;
}

export interface Customer {
    salary: number;
    login(): void;
}

let user: User & Customer = {
    name: "Tom",
    age: 30,
    salary: 12.33,
    drive(): void {
        console.log(`${user.name} is driving`);
    },
    login(): void {
        console.log(`${user.name} is logged in`);
    }
}

console.log(user.name);
user.drive();
user.login();
console.log(user.salary);