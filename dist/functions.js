function add(x, y) {
    return x + y;
}
let res = add(12, 13);
console.log('sum of two number is:', res);
console.log("-------------------------------------------------------------------------");
function print() {
    console.log('this is print function');
}
print();
console.log("-------------------------------------------------------------------------");
/**
 *
 * @param element
 * @param timeout
 * @returns it returns boolean value
 */
function isElementDisplayed(element, timeout) {
    let isElement = true;
    if (isElement) {
        console.log(`element is present on the page: ${element} within ${timeout} ms`);
        return true;
    }
    else {
        console.log('element is not found...');
        return false;
    }
}
isElementDisplayed('username', 5000);
console.log("-------------------------------------------------------------------------");
function getData() {
    console.log('get data...');
    return ['admin', 'manager', 'user'];
}
console.log(getData());
console.log("-------------------------------------------------------------------------");
/* never: will never return anything...
    it will throw error or infinite loop
*/
function throwError(msg) {
    throw new Error(msg);
}
throwError('browser is not found...');
console.log("-------------------------------------------------------------------------");
function getUserData() {
    return { name: 'tom', age: 45 };
}
let user = getUserData();
console.log(user);
console.log("-------------------------------------------------------------------------");
export {};
