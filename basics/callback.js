// callback hell : pyramid of doom.

// callback examples:

function startmachine(callback) {
    console.log('Starting the machine...');
    callback();
}

// Callback calls exmamples:

// Arorw function
startmachine(() => {
    console.log('done!');
});

console.log("-------------------------------------------------------------------------");

// Annonymous function
startmachine(function () {
    console.log('pass!');
});

console.log("-------------------------------------------------------------------------");

// Named function
function done() {
    console.log('operation completed!');
}
startmachine(done);

console.log("-------------------------------------------------------------------------");

// Empty callback function

startmachine(() => { });

console.log("-------------------------------------------------------------------------");

function getDetails(callback) {
    console.log('getting some details...');
    callback(100);
}

getDetails((x) => {
    console.log(x); // 100
});

console.log("-------------------------------------------------------------------------");

function getMyDetails(callback) {
    console.log('getting some details...');
    callback('Playwright');
}

getMyDetails((x) => {
    console.log(x); // Playwright
});

console.log("-------------------------------------------------------------------------");