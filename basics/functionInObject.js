let user = {
    name: "John",
    age: 30,
    salary: 50000,

    // Function as a property
    // This function can be called as user.coding() or user[ "coding" ]()
    // It is a method of the object
    coding: function code() {
        console.log(`${this.name} is coding.`);
    },

    printing(ctc) {
        console.log("your current ctc is:", ctc);
        let finalSalary = this.salary + ctc;
        return finalSalary;
    },

    // annonymous function as a property
    /**
     * 
     * @param {string} sportName 
     */
    playing: function (sportName) {
        console.log(`${this.name} is playing ${sportName}.`);
    },

    // arrow function as a property
    // arrow functions do not have their own 'this', they inherit it from the parent scope
    // In this case, 'this' refers to the user object
    // Note: Arrow functions are not suitable for methods that need to access the object properties using 'this'

    /**
     * 
     * @param {number} speed 
     */
    running: (speed) => {
        console.log(`${user.name} is running with ${speed} km/h.`);
    }

};

console.log(user.name); // Output: John
user.coding(); // Output: John is coding.
console.log(user[ "age" ]); // Output: 30
user[ "coding" ](); // Output: John is coding.

console.log("-------------------------------------------------------------------------");

// Accessing function in object
let currentCTC = user.printing(10000);
console.log("Your final salary is:", currentCTC); // Output: Your final salary is: 60000

console.log("-------------------------------------------------------------------------");

user.playing("Basketball"); // Output: John is playing Basketball. 

console.log("-------------------------------------------------------------------------");

user.running(10); // Output: John is running with fast.

console.log("-------------------------------------------------------------------------");

let loginPage = {
    emailXpath: "//input[@id='email']",
    passwordXpath: "//input[@id='password']",
    loginButtonXpath: "//button[@id='login']",

    login(email, password) {
        console.log(`entering email: ${email} into element : ${this.emailXpath}`);

        console.log(`entering password: ${password} into element : ${this.passwordXpath}`);

        console.log(`clicking on login button: ${this.loginButtonXpath}`);

        console.log(`Logging in with email: ${email} and password: ${password}`);

        // Here you would typically interact with the web page elements using Playwright or similar library

        // We can call the methods/ functions from the other object as well

        user.coding(); // Calling the method from the user object

        console.log(user.name + ":" + user.age); // Output: John:30:50000
    }
}

loginPage.login('vinay.uno182@gmail.com', 'password123');