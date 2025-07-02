console.log(`-----var concept----`);

var a = 10; // Global variable

function f1() {
    var a = 20; // Function-scoped variable
    console.log(a);
    if (true) {
        var a = 30; // Re-declaring the same variable in the same function scope
        // This will not create a new block-scoped variable, it will modify the existing one
        console.log(a);
    }
    console.log(a);
}

f1();
console.log(a);

var b = 10; // Global variable
var b = 5;
b = 8; // with 'var' keyword the variable can be re-declared and re-assigned.

// Hoesting example
console.log(c); // undefined, because of hoisting
var c = 12; // 'c' is hoisted to the top of the scope, but its assignment happens here
console.log(c); // 12, now 'c' has been assigned

// #########################################
console.log(`-----let concept----`);
let num = 20; // Global level variable

function f2() {
    let num = 30; // Function-scoped variable
    console.log(num);
    if (true) {
        let num = 40; // Block-scoped variable
        console.log(num);
    }
    console.log(num); // This will refer to the 'num' defined in the function scope, not the block scope
    // The outer 'num' is not affected by the inner block-scoped 'num'
}
console.log(num);
f2();

console.log(`-----hoesting in let concept----`);

// console.log(age);
let age = 25; // 'age' is not hoisted like 'var', so this will throw a ReferenceError

/* let age = 30;  This line will not be executed due to the error above.

redecleration is not allowed with let but we can re-assign the let variable */

console.log(age); // This line will not be executed due to the error above  

/*------------------------------------*/

console.log(`-----const concept----`);

const pi = 3.14; // Constant variable, cannot be re-assigned