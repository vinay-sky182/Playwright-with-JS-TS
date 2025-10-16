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

function getmarks(callback) {
    console.log('getting some marks...');
    callback(200);
    return 500;
}

let t1 = getmarks((num) => {
    console.log(num);
})
console.log(t1);

console.log("-------------------------------------------------------------------------");

function openPage(url, callback) {
    console.log('Opening URL:', url);
    let browser = callback('Amzon Login Page');
    console.log('Browser selected:', browser);
    return true;

}
let flag = openPage('https://www.amazon.com', (title) => {
    console.log('getting the page title:', title);
    return 'chrome';
});
console.log('Page opened successfully:', flag);

console.log("-------------------------------------------------------------------------");

// wait for 5 sec.

setTimeout(() => {
    console.log('5 seconds later...data fetched from server');
}, 5000);

// To this way we can invoke the degugger in dev tools of browser

/* 
setTimeout(() => {
    debugger;
}, 5000); */

