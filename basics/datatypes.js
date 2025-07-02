console.log(`-----number data type----`);

let num1 = 10; // Integer
let num2 = 10.5; // Float
console.log(`num1: ${num1}, num2: ${num2}`);

console.log(typeof (num1)); // Output: number
console.log(typeof (num2)); // Output: number
// All numbers are 8 bytes (64 bits) in JS.
/* console.log(sizeof(num1)); // Output: 8 (size in bytes (64 bits) for number type in JavaScript)*/

/* console.log(sizeof(num2)); // Output: 8 (size in bytes (64 bits) for number type in JavaScript) */

console.log(`-----string data type----`);

let str1 = "Hello, JavaScript!"; // String with double quotes
let str2 = 'Hello, World!'; // String with single quotes
let str3 = `Hello, Template Literals!`; // Template literal
let str4 = '007'; // String with numbers
console.log(`str1: ${str1}, str2: ${str2}, str3: ${str3}, str4: ${str4}`);
console.log(typeof (str1)); // Output: string 

/* console.log(sizeof(str1)); // 2 bytes per character in UTF-16 encoding, so for example, "Hello" would be 10 bytes (5 characters * 2 bytes each) */

/* console.log(sizeof(str2)); // 12 bytes for "Hello, World!" (6 character * 2 bytes each) */

console.log(`-----boolean data type----`);

let flag1 = true; // Boolean true
let flag2 = false; // Boolean false

console.log(`flag1: ${flag1}, flag2: ${flag2}`);
console.log(typeof (flag1)); // Output: boolean

console.log(sizeof(flag1)); // Output: 4 bytes(32 bits in JavaScript)

console.log(`-----undefined data type----`);

let var1; // Variable declared but not initialized
let var2 = undefined; // Explicitly set to undefined
console.log(`var1: ${var1}`); // Output: undefined
console.log(`var2: ${var2}`); // Output: undefined
console.log(typeof (var1)); // Output: undefined

/* console.log(sizeof(var1)); // Output: 0 to 4 bytes (not fixed in size depends on js engine) */


console.log(`-----null data type----`);

let var3 = null; // Explicitly set to null
console.log(`var3: ${var3}`); // Output: null   
console.log(typeof (var3)); // Output: object (this is a known JavaScript quirk)

/* console.log(sizeof(var3)); // Output: 0 to 4 bytes (depends on javascript engine implementation, but generally considered to have no size) */