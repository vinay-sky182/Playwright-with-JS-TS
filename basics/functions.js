// Method: When we create a function inside the class, it is called a method.
// Methods are functions that belong to an object and can access the object's properties.

// Function: When we create a function outside of a class, it is just a regular function.
// Functions can be standalone and do not belong to any object.

// Function can be hoisted, meaning it can be called before it is defined. 
// Methods cannot be hoisted, meaning they can only be called after they are defined within the class.

/**
 * 
 * @param {string} browserName 
 */

function launchBrowser(browserName) {
    console.log(`Browser name is: ${browserName}`);
    switch (browserName) {
        case "Chrome":
            console.log("Launching Chrome browser");
            return true;
        case "Firefox":
            console.log("Launching Firefox browser");
            return true;
        case "Brave":
            console.log("Launching Brave browser");
            return true;
        case "Edge":
            console.log("Launching Edge browser");
            return true;
        default:
            console.log(`Invalid browser: ${browserName}`);
            return false;
    }
}

let isBrowserLaunched = launchBrowser("Chrome");
console.log(`Browser launched: ${isBrowserLaunched}`); // Output: Browser launched: true
if (isBrowserLaunched) {
    console.log("Enter the URL");
}
console.log(typeof (launchBrowser)); // Output: function

("-------------------------------------------------------------------------");

// function expression

let log_in = function loginApp() {
    switch (arguments.length) {
        case 0:
            console.log("Default login function called");
            break;
        case 2:
            console.log(`Login function called with username: ${arguments[ 0 ]} and password: ${arguments[ 1 ]}`);
            break;
        case 3:
            console.log(`Login function called with username: ${arguments[ 0 ]}, password: ${arguments[ 1 ]}, and otp: ${arguments[ 2 ]}`);
            break;
        default:
            console.log("Invalid number of arguments");
            break;
    }
}

log_in();// Default login function called
console.log("Internal name of function is:",log_in.name); // Output: loginApp

// function overloading is not supported in JavaScript, but we can achieve similar functionality using the arguments object. this is a hacky way to achieve function overloading

function login(username, password, otp) {
    if (arguments.length === 0) {
        console.log("Default login function called");
    } else if (arguments.length === 2) {
        if (typeof username !== "string" || typeof password !== "string") {
            console.log("Invalid input types for username or password");
            return;
        }
        console.log(`Login function called with username: ${username} and password: [PROTECTED]`);
    } else if (arguments.length === 3) {
        if (typeof username !== "string" || typeof password !== "string" || typeof otp !== "string") {
            console.log("Invalid input types for username, password, or otp");
            return;
        }
        console.log(`Login function called with username: ${username}, password: [PROTECTED], and otp: [PROTECTED]`);
    } else {
        console.log("Invalid number of arguments");
    }
}

login(); // Default login function called
login("username", "password"); // Login function called with username: username and password: [PROTECTED]

function loginWithOtp(username, password, otp) {
    console.log("Login function called with username: " + username + ", password: [PROTECTED], and otp: [PROTECTED]");
}

loginWithOtp();

