/* Passing the function name to another function as a parameter is known as a callback function.

Callback functions are often used in asynchronous programming to handle events or responses after a task is completed. 

Call a function by passing the function name.
*/

let sum = (a, b) => {
    return a + b;
}

let sub = (a, b) => {
    return a - b;
}

let multiply = (a, b) => {
    return a * b;
}

let divide = (a, b) => {
    return b / a;
}

function calculate(operation, a, b) {
    console.log("Performing calculation...");
    return operation(a, b);
}

// Calling the function

let result = calculate(sum, 10, 20); // Output: Performing calculation...
console.log(`Operation Sum: ${result}`); // Output: 30

console.log("-------------------------------------------------------------------------");

result = calculate(sub, 20, 10); // Output: Performing calculation...
console.log(`Operation Subtraction: ${result}`); // Output: 10

console.log("-------------------------------------------------------------------------");

result = calculate(multiply, 10, 20); // Output: Performing calculation...
console.log(`Operation Multiplication: ${result}`); // Output: 200

console.log("-------------------------------------------------------------------------");

result = calculate(divide, 10, 20); // Output: Performing calculation...
console.log(`Operation Division: ${result}`); // Output: 2  

console.log("-------------------------------------------------------------------------");

result = calculate((a, b) => a % b, 10, 20); // Output: Performing calculation...
console.log(`Operation Modulus: ${result}`); // Output: 10

console.log("-------------------------------------------------------------------------");

// Callback with anonymous functions

const addition = function (x, y) {
    return x + y;
}
const subtraction = function (x, y) {
    return y - x;
}
const multiplication = function (x, y) {
    return x * y;
}
const division = function (x, y) {
    return y / x;
}

// actual function to perform the operation
function performOperation(a, b, operation) {
    console.log("Performing math operation:", operation.name);
    return operation(a, b);
}

let res = performOperation(10, 20, addition);
console.log(`Addition Result: ${res}`); // Output: Addition Result: 30

console.log("-------------------------------------------------------------------------");

res = performOperation(10, 55, subtraction);
console.log(`Subtraction Result: ${res}`); // Output: Subtraction Result: 45

console.log("-------------------------------------------------------------------------");

// Callback with named function

function add(a, b) {
    console.log("This is a function for addition");
    return a + b;
}

function calc(a, b, funcName){
    console.log("Performing calculation using:", funcName.name);
    return funcName(a, b);
}

let addRes = calc(10, 20, add);
console.log(`Addition Result: ${addRes}`); // Output: Addition Result: 30

console.log("-------------------------------------------------------------------------");

