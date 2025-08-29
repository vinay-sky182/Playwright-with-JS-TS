function add(x: number, y: number): number {

    return x + y;
}

let res: number = add(12, 78);
console.log('sum of two numbers is:', res);

console.log("-------------------------------------------------------------------------");

function print(): void {

    console.log('some info...');
}

print();

console.log("-------------------------------------------------------------------------");

function clickElement(element: string): void {

    console.log(`click on element: ${element}`);
}
clickElement('loginButton');

console.log("-------------------------------------------------------------------------");


/**
 * This function is checking the element on the page
 * @param element 
 * @param timeout 
 * @returns it returns a boolean value(true/false)
 */


function isElementVisible(element: string, timeout: number): boolean {
    let isElement = true;
    if (isElement) {
        console.log(`element is present on the page : ${element} within time ${timeout}`);
        return true;
    }
    else {
        console.log('element not found');
        return false;
    }
}

if (isElementVisible('loginLink', 10)) {
    clickElement('loginLink');
}

console.log("-------------------------------------------------------------------------");


function getData(): string[] {
    console.log('get data....');
    return ['macbook', 'imac', 'iphone'];
}

console.log(getData());

console.log("-------------------------------------------------------------------------");

// It will never return anything..
// 1. function will throw an error.

function throwError(msg: string): never {
    throw new Error(msg);
}

// throwError('browser not found...');

console.log("-------------------------------------------------------------------------");

// 2. infinite loop

/* function keepRunning(): never {
    while (true) {
        console.log('Running');
    }
    
 }*/

// keepRunning();

function getUserData(): {} {
    return {
        name: 'tom',
        age: 30
    }
}

let user = getUserData();
console.log(user);