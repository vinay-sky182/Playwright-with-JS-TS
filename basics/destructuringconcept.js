// extract the values from the array/objects and assign then to variables.

let products = ['apple', 'samsung', 'motorola'];
let [a, b, c] = products;

console.log('value of a:', a) // apple
console.log('value of b:', b) // samsung
console.log('value of c:', c) // motorola

console.log("-------------------------------------------------------------------------");

let [first, , third] = products;
console.log('value of first:', first) // apple
console.log('value of third:', third) // motorola

console.log("-------------------------------------------------------------------------");

let [x, y, z, w] = products;

console.log('value of x:', x) // apple
console.log('value of y:', y) // samsung
console.log('value of z:', z) // motorola
console.log('value of w:', w) // undifined

console.log("-------------------------------------------------------------------------");

let login = ['admin', 'admin@123'];

let [i, j, k = 'remember_me'] = login;

console.log('value of i:', i); // admin
console.log('value of j:', j); // admin@123
console.log('value of k:', k); // remember_me, because it is a default value if there is not default value then 'k' wolud be undifined

console.log("-------------------------------------------------------------------------");

let numbers = [1, 2, 3, 4, 5];
let [head, ...tail] = numbers;
console.log(head);
console.log(tail);

console.log("-------------------------------------------------------------------------");

let person = {
    name: 'Vishal',
    age: 31,
    salary: 13.12,
    isActive: true
};

// while de-structuring an object key name should be the same

// let { name, age, salary } = person;

// console.log('value of name is:', name); // Vishal
// console.log('value of age is:', age); // 31
// console.log('value of salary is:', salary); // 13.12

console.log("-------------------------------------------------------------------------");

// re-naming

let { name: personname, age: personage, salary: personsalary } = person;

console.log('value of person_name is:', personname);
console.log('value of person_name is:', personage);
console.log('value of person_salary is:', personsalary);

console.log("-------------------------------------------------------------------------");