/* Anonymous function are those function which dosen't have any name */

let greet = function () {
    console.log('Hello, World!');
}

greet(); // Output: Hello, World!

console.log("-------------------------------------------------------------------------");

let add = function (a, b) {
    console.log("This is an anonymous function");
    return a + b;
}
let sum = add(5, 10);
console.log("Sum is:", sum); // Output: Sum is: 15

console.log("-------------------------------------------------------------------------");

// switch case example in anonymous function

/**
 * 
 * @param {string} browserName 
 */

let isBrowserLaunched = function (browserName) {
    console.log(`Browser name is: ${browserName}`);
    switch (browserName.trim().toLowerCase()) {
        case "chrome":
            console.log("launch chrome browser");
            return true;
        case "firefox":
            console.log("launch firefox browser");
            return true;
        default:
            console.log(`Invalid browser: ${browserName}`);
            return false;
    }
}
let browserLaunched = isBrowserLaunched("Chrome");
console.log(`Browser launched: ${browserLaunched}`); // Output: Browser launched: true  