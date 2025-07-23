/* 
   Objects: Objects are a collection of key-value pairs, where keys are strings and values can be any data type.
   Objects are used to store related data and functionality together.
   key is a string, and value can be any data type (string, number, boolean, array, function, etc.)
   Objects are created using curly braces {} and can be accessed using dot notation or bracket [] notation.

*/

let employee = {
    name: "John Doe",
    age: 30,
    position: "Software Engineer",
    skills: [ "JavaScript", "Playwright", "Cucumber" ],
    isActive: true,
    city: "New York"
};

console.log(employee); // Output: { name: 'John Doe', age: 30, position: 'Software Engineer', skills: [ 'JavaScript', 'React', 'Node.js' ], isActive: true, city: 'New York' }

console.log(employee.name); // Output: John Doe
console.log(employee[ "age" ]); // Output: 30 
console.log(employee.skills[ 0 ]); // Output: JavaScript
console.log(employee[ "skills" ][ 1 ]); // Output: React
console.log(employee.isActive); // Output: true
console.log(employee[ "city" ]); // Output: New York

console.log("-------------------------------------------------------------------------");

// Adding a new key-value pair to the object

employee.department = "Engineering";
console.log(employee); // Output: { name: 'John Doe', age: 30, position: 'Software Engineer', skills: [ 'JavaScript', 'React', 'Node.js' ], isActive: true, city: 'New York', department: 'Engineering' }

console.log("-------------------------------------------------------------------------");

// Updating an existing key-value pair in the object

employee.age = 31;
console.log(employee.age); // Output: 31

console.log("-------------------------------------------------------------------------");

// Deleting a key-value pair from the object

delete employee.isActive;

console.log(employee.isActive); // Output: undefined, because isActive key has been deleted

console.log("-------------------------------------------------------------------------");

let car = {
    brand: "Tesla",
    model: "Model S",
    year: 2020,
    features: [ "Autopilot", "Electric", "Luxury" ]
};
console.log(car); // Output: { brand: 'Tesla', model: 'Model S', year: 2020, features: [ 'Autopilot', 'Electric', 'Luxury' ] }
console.log("-------------------------------------------------------------------------");

/* 
   Accessing object properties using for...in loop
   Note: for...in loop iterates over the keys of the object 
 */

for (let key in car) {
    console.log(`${key}: ${car[ key ]}`); // Output: brand: Tesla, model: Model S, year: 2020, features: Autopilot,Electric,Luxury
}

console.log("-------------------------------------------------------------------------");

// Accessing object properties using Object.keys() method           

car.keys = Object.keys(car);
console.log(car.keys); // Output: [ 'brand', 'model', 'year', 'features', 'keys' ]

console.log("-------------------------------------------------------------------------");

car.values = Object.values(car);
console.log(car.values); // Output: [ 'Tesla', 'Model S', 2020, [ 'Autopilot', 'Electric', 'Luxury' ], [ 'brand', 'model', 'year', 'features', 'keys' ] ]   

console.log("-------------------------------------------------------------------------");

// Accessing object properties using Object.entries() method

car.entries = Object.entries(car);
console.log(car.entries); // Output: [ [ 'brand', 'Tesla' ], [ 'model', 'Model S' ], [ 'year', 2020 ], [ 'features', [ 'Autopilot', 'Electric', 'Luxury' ] ], [ 'keys', [ 'brand', 'model', 'year', 'features', 'keys' ] ] ]

console.log("-------------------------------------------------------------------------");

// Creating an object using the class: latest JS: ES6

class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
}
let p1 = new Product("Laptop", 1500, "Electronics");
console.log(p1); // Output: Product { name: 'Laptop', price: 1500, category: 'Electronics' }
console.log(p1.name); // Output: Laptop  
console.log(p1.price); // Output: 1500
console.log(p1.category); // Output: Electronics

/* Garbage collection: JavaScript has automatic garbage collection, which means it automatically frees up memory by removing objects that are no longer needed, have no object references, or have a null reference.

This helps in managing memory efficiently and prevents memory leaks in applications. */

console.log("-------------------------------------------------------------------------");

// Immutable objects: In JavaScript, objects are mutable by default, meaning their properties can be changed. However, we can create immutable objects using Object.freeze() and seal() methods.

// Object.freeze() makes an object immutable, meaning its properties cannot be changed, added, or deleted.

let user = {
    name: "john_doe",
    city: "Los Angeles"
};
Object.freeze(user);
user.name = "jane_doe"; // Updating: This will not change the name property
console.log(user.name); // Output: john_doe, because the object is frozen and cannot be modified
user.salary = 50000; // Adding: This will not add a new property
console.log(user.salary); // Output: undefined, because the object is frozen and cannot be modified
delete user.city; // Deleting: This will not delete the city property
console.log(user); // Output: { name: 'john_doe', city: 'Los Angeles' }, because the object is frozen and cannot be modified

// Object.seal() allows modification of existing properties but prevents adding or deleting properties. 

let employee2 = {
    name: "Alice",
    age: 25,
    position: "Developer"
};

Object.seal(employee2);
employee2.age = 26; // Updating: This will change the age property
console.log(employee2.age); // Output: 26, because the object is sealed and can be modified
employee2.department = "IT"; // Adding: This will not add a new property
console.log(employee2.department); // Output: undefined, because the object is sealed and cannot add new properties
delete employee2.position; // Deleting: This will not delete the position property

console.log("-------------------------------------------------------------------------");

// Renaming object keys: To rename an object key, we can add a new key with the desired name and delete the old key.

let obj = { oldKey: "value" };

console.log(obj);
// Rename 'oldKey' to 'newKey'
obj.newKey = obj.oldKey; // Step 1: Add new key
delete obj.oldKey;       // Step 2: Delete old key

console.log(obj); // { newKey: "value" }