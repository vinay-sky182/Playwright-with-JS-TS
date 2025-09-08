// Demonstrates error handling concepts in TypeScript

// Division by zero; in JavaScript/TypeScript, this results in Infinity, not an error
let number = 9 / 0;
console.log(number); // Output: Infinity

// Function m1 calls m2 and logs its execution
function m1() {
    console.log('m1 function..');
    m2();
}

// Function m2 demonstrates try-catch-finally error handling
function m2() {
    console.log('m2 function..');
    try {
        m3(); // Call m3, which may throw an error
    }
    catch (error) {
        // Handles any error thrown by m3
        console.log('something went wrong..');
    }
    finally {
        // Executes regardless of error occurrence
        console.log('close the connection');
    }
}

// Function m3 is called by m2; error throwing is commented out
function m3() {
    console.log('m3 function..');
    /* 
    // Example of throwing and catching an error
    try {
        throw new Error('some error');
    }
    catch (error) {
        console.log('something went wrong..');
    }
    */
}

// Start the function chain
m1();
console.log('BYE!!!!!'); //