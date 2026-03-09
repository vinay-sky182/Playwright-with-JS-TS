// reduce() : combine [1,2,3,4,5]------> 15 ------> return single value

let numbers = [1, 2, 3, 4, 5];

// sum of all the numbers :15
// 0 is initial value of sum

let total = numbers.reduce((sum, ele) => sum + ele, 0);
console.log('sum of all the elements of an array:', total);

console.log("-------------------------------------------------------------------------");

// multiplie all the numbers : 120
// 1 is initial value of total

let multiply = numbers.reduce((total, num) => total * num, 1);
console.log('multiplication of all the elements of an array:', multiply);

console.log("-------------------------------------------------------------------------");

let dict = ['hello', 'javascript', 'playwright'];

/* Jab aapne initial value nahi di, toh engine ne array ['hello', 'javascript', 'playwright'] ko dekha aur ye steps liye:

Step 1: Engine ne dict[0] (yaani 'hello') ko uthaya aur use result variable mein daal diya.

Step 2: Kyunki pehla element pehle hi accumulator ban gaya, isliye loop seedha doosre element ('javascript') se shuru hua. */

let newDict = dict.reduce((result, ele) => result + ' ' + ele);

console.log('dict:', dict);
console.log('new dict:', newDict);

console.log("-------------------------------------------------------------------------");

let marks = [85, 90, 78, 92, 88];

// find average of the elements : 86.6

let avg = marks.reduce((sum, ele) => { return sum + ele }, 0) / marks.length;

console.log('average of all the elements of an array:', avg);

console.log("-------------------------------------------------------------------------");

