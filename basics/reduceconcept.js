// reduce() : combine [1,2,3,4,5]------> 15 ------> return single value

let numbers = [1, 2, 3, 4, 5];

// sum of all the numbers :15

let total = numbers.reduce((sum, ele) => sum + ele, 0);
console.log('sum of all the elements of an array:', total);

console.log("-------------------------------------------------------------------------");

// multiplie all the numbers : 120

let multiply = numbers.reduce((total, num) => total * num, 1);
console.log('multiplication of all the elements of an array:', multiply);

console.log("-------------------------------------------------------------------------");

let dict = ['hello', 'javascript', 'playwright'];

let newDict = dict.reduce((result, ele) => result + ' ' + ele);

console.log('new dict:', newDict);

console.log("-------------------------------------------------------------------------");

let marks = [85, 90, 78, 92, 88];

// find average of the elements : 86.6

let avg = marks.reduce((sum, ele) => { return sum + ele }, 0) / marks.length;

console.log('average of all the elements of an array:', avg);

console.log("-------------------------------------------------------------------------");

