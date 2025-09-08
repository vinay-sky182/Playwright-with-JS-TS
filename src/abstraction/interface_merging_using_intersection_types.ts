// This file demonstrates TypeScript interface merging using intersection types.

// Define a User interface with name, age, and drive method
export interface User {
    name: string;
    age: number;

    drive(): void;
}

// Define a Customer interface with salary and login method
export interface Customer {
    salary: number;
    login(): void;
}

// Create an object 'user' that implements both User and Customer interfaces
let user: User & Customer = {
    name: "Tom", // User property
    age: 30,     // User property
    salary: 12.33, // Customer property
    drive(): void {
        // Implementation of User's drive method
        console.log(`${user.name} is driving`);
    },
    login(): void {
        // Implementation of Customer's login method
        console.log(`${user.name} is logged in`);
    },
    // Note: Cannot add properties/methods not defined in User or Customer interfaces
}

// Accessing properties and methods from both interfaces
console.log(user.name);   // Output: Tom
user.drive();             // Output: Tom is driving
user.login();             // Output: Tom is logged in