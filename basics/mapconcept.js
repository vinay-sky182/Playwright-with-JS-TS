// map() : transformation [1,2,3]------> [1,4,9] -----> return an array of same size.
// reduce() : combine [1,2,3,4,5]------> 15 ------> return single value

let numbers = [1, 2, 3, 4, 5];

// (ele) => ele + 5
let newNum = numbers.map(ele => ele + 5);
console.log('transformed array:', newNum);
console.log('existed array:', numbers);

console.log("-------------------------------------------------------------------------");


let myNum = numbers.map((ele) => { return ele ** 2 });
console.log('transformed array with square:', myNum);

console.log("-------------------------------------------------------------------------");

let words = ['namaste', 'javascript'];
let uppercaseWords = words.map(ele => ele.toUpperCase());
console.log('transformed array with uppercase:', uppercaseWords);

// Get the first character of each word:

let firstChar = words.map(ele => ele[0]);
console.log('transformed array with first character:', firstChar);

console.log("-------------------------------------------------------------------------");

let products = ['help', 'contact', 'music', 'prime'];

let footerLinks = products.map(ele => 'amazon_' + ele);
console.log('transformed array with appended word:', footerLinks);

console.log("-------------------------------------------------------------------------");