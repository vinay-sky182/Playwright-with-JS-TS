// Arrow functions are a more concise syntax for writing function expressions in JavaScript.It is also one kind of annonymous function. If you have a single expression, you can omit the curly braces and the return keyword. If you have multiple expressions, you need to use curly braces and the return keyword.We know this as fat arrow function. If we have a single parameter, we can omit the parentheses around the parameter. If we have no parameters, we need to use empty parentheses.

const greet = (name) => {
    console.log("Hello, " + name);
}
greet("Vinay"); // Output: Hello, Vinay

console.log("-------------------------------------------------------------------------");


/**
 * 
 * @param {string} message 
 * @returns 
 */

const say = message => console.log("Hello", message);

say("Playwright!"); // Output: Hello, Playwright!

console.log("-------------------------------------------------------------------------");

const add = (a, b) => a + b;
let sum = add(5, 10);
console.log(`Sum is: ${sum}`); // Output: Sum is: 15


console.log("-------------------------------------------------------------------------");
// Arrow functions can also be used as callbacks.

/**
 * 
 * @param {string} browserName 
 * @returns 
 */

const isBrowserLaunched = (browserName) => {
    console.log(`Browser name is: ${browserName}`);
    switch (browserName.trim().toLowerCase()) {
        case "chrome":
            console.log("Launching Chrome browser");
            return true;
        case "firefox":
            console.log("Launching Firefox browser");
            return true;
        default:
            console.log(`Invalid browser: ${browserName}`);
            return false;
    }
}
let browserLaunched = isBrowserLaunched("Chrome");
console.log(`Browser launched: ${browserLaunched}`); // Output: Browser launched: true

console.log("-------------------------------------------------------------------------");

