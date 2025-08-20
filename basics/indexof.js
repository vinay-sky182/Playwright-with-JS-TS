let num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5 ];
let n = num.indexOf(5); // It will return the index of the first occurrence of 5
console.log("Index of 5 in the array:", n); // Output: 4

let n1 = num.indexOf(11); // It will return -1 because 11 is not in the array
console.log("Index of 11 in the array:", n1); // Output: -1

console.log("-------------find second occurrence of 5------------------");

// indexOf(searchElement, fromIndex) - it will return the index of the first occurrence of the searchElement starting from the fromIndex.
// If the searchElement is not found, it will return -1.

let n2 = num.indexOf(5, 5); // It will return the index of 5 starting from index 5
console.log("Index of 5 in the array starting from index 5:", n2); // Output: 10

let n3 = num.indexOf(5, num.indexOf(5) + 1); // It will return the index of 5 starting from index 5
console.log("Index of 5 in the array starting from index 5:", n3); // Output: 10
// It finds the second occurrence of 5 in the array by starting the search from index 5.
// The first occurrence of 5 is at index 4, so it starts searching from index 5.
