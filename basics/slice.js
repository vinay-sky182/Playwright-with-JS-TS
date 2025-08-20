// slice - it will return portion of an array.

let number = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let numberSlice = number.slice(2, 4); // It will return elements from index 2 to index 3 (4 is not included)
console.log("original number array:", number); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("Print array after slicing from index 2 to 4:", numberSlice); // Output: [3, 4]
// It does not change the original array


console.log("-------------------------------------------------------------------------");

// get last 3 numbers:
let lastThreeNumbers = number.slice(-3); // It will return the last 3 elements of the array
console.log("Print the last 3 numbers from the array:", lastThreeNumbers); // Output: [8, 9, 10]
// Negative indices count from the end of the array, so -1 is the last element,

console.log("-------------------------------------------------------------------------");

let lastTwoNumbers = number.slice(8, 10); // It will return the last 2 elements of the array
console.log("Print the last 2 numbers from the array:", lastTwoNumbers); // Output: [9, 10]
// Here, 8 is the starting index and 10 is the ending index (not included),
// so it returns elements at index 8 and 9, which are 9 and 10.

console.log("-------------------------------------------------------------------------");

// If the negative start index is less than the negative array length, slice returns the whole array.
// If the positive start index is greater than or equal to the array length, slice returns an empty array.
let negativeSlice = number.slice(-20); // It will return the whole array
// because -20 is less than the length of the array (which is 10).
// It effectively means "start from the beginning of the array".
console.log("Print the array when negative index is used:", negativeSlice); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// It returns all elements from the array, as it starts from the beginning and goes to the end.
// If the negative start index is greater than the negative array length, slice returns an empty array
// If the positive start index is greater than or equal to the array length, slice returns an empty array.
// because 20 is greater than the length of the array (which is 10).

console.log("-------------------------------------------------------------------------");

let positiveSlice = number.slice(20); // It will return an empty array
console.log(positiveSlice); // Output: []

console.log("-------------------------------------------------------------------------");

let nm = number.slice(2); // It will return elements from index 2 to the end of the array
// It effectively means "start from index 2 and go to the end of the array".
// It does not change the original array.
console.log("Print the array after slicing from index 2 to the end:", nm); // Output: [3, 4, 5, 6, 7, 8, 9, 10]
// It returns all elements from index 2 to the end of the array.

console.log("-------------------------------------------------------------------------");

let n = number.slice(); // It will return a shallow copy of the entire array
console.log(n); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
