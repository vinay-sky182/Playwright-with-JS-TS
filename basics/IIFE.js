// IIFE - Immediately Invoked Function Expression, It can not be reused. It is executed immediately after it is defined.It is also known as a self-invoking function. It is also an anonymous function that is executed immediately after it is defined.

(function () {
    function greet(name) {
        console.log("Hello, " + name);
    }
    console.log('IIFE executed');
    // You can also pass a name to see the greeting
    greet("Vinay"); // Output: Hello, Vinay
})(); // This is an IIFE, it runs immediately after being defined

("-------------------------------------------------------------------------");

// Parameters can be passed to IIFE
(function (name) {
    console.log("Hello, " + name);
})("Vinay"); // Output: Hello, Vinay

("-------------------------------------------------------------------------");

// IIFE with return value

let result = (function (a, b) {
    return a + b;
})(5, 10); // Output: 15
console.log("Result of IIFE:", result); // Output: Result of IIFE: 15
