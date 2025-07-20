// Array: collection of gropup of elements in a single variable

let n = [];
console.log(n.length); // 0, because it's an empty array
console.log(n); // []

let arr = [ 1, 2, 3, 4, 5 ]; // Array literal syntax
console.log(arr.length); // 5, because it has 5 elements
console.log(arr); // [1, 2, 3, 4, 5 ]
console.log(arr[ 0 ]); // 1, accessing the first element
console.log(arr[ 1 ]); // 2, accessing the second element 
console.log(arr[ 2 ]); // 3, accessing the third element
console.log(arr[ 3 ]); // 4, accessing the fourth element
console.log(arr[ 4 ]); // 5, accessing the fifth element
console.log(arr[ 5 ]); // undefined, because there is no sixth element
console.log(arr[ -1 ]); // undefined, negative indexing is not supported in JavaScript arrays

// mixed data types in array
let mixedArr = [ 'vishal', 28, 20.33, true, 'm' ];
console.log(mixedArr.length); // 5, because it has 5 elements
console.log(mixedArr); // ['vishal', 28, 20.33 ,true, 'm']

// using array constructor
let arr2 = new Array(1, 2, 3, 4, 5); // Array constructor syntax    
let ar = new Array(5); // Creates an array with 5 empty slots
console.log(arr2.length); // 5, because it has 5 elements   
console.log(arr2); // [1, 2, 3, 4, 5]
console.log(ar.length); // 5, because it has 5 empty slots    

// using array interface
let arr3 = Array.of(1, 2, 3, 4, 5); // Array.of() method creates a new array instance with the given elements

// JS arrays are dynamic in nature, meaning they can grow and shrink in size as needed
// We can add or remove elements from an array at any time

console.log("-------------------------------------------------------------------------");

let num = [ 1, 2, 3, 4, 5 ];
console.log(num.length); // 5, because it has 5 elements

// Adding elements to an array
num.push(6); // Adds 6 to the end of the array
console.log(num.length); // 6, because now it has 6 elements
console.log(num); // [1, 2, 3, 4, 5, 6]

// add to the beginning of the array
num.unshift(0); // Adds 0 to the beginning of the array
console.log(num);   // [0, 1, 2, 3, 4, 5, 6]    

// Removing elements from an array
num.pop(); // Removes the last element (6) from the array   
console.log(num); // [0, 1, 2, 3, 4, 5]

// remove from the beginning of the array
let remove = num.shift(); // Removes the first element (0) from the array    
console.log(num); // [1, 2, 3, 4, 5]
console.log(`Removed element: ${remove}`); // Removed element: 0

// Identifying that object is an array
let obj = { name: "vishal", age: 28 };
console.log(Array.isArray(obj)); // false, because obj is not an array
console.log(Array.isArray(num)); // true, because num is an array


console.log("-------------------------------------------------------------------------");

let myBrands = [ "Apple", "Samsung", "OnePlus", "Google" ];

// for loop to iterate over an array
for (let i = 0; i < myBrands.length; i++) {
    console.log(myBrands[ i ]); // prints each element of the array
}

console.log("-------------------------------------------------------------------------");

// for...of loop to iterate over an array
for (let brand of myBrands) {
    console.log(brand); // prints each element of the array
}

console.log("-------------------------------------------------------------------------");

// for...in loop to iterate over an array
for (let index in myBrands) {
    console.log(`Index: ${index}, Value: ${myBrands[ index ]}`); // prints index and value of each element
}

console.log("-------------------------------------------------------------------------");
// Reverse iteration using for...in loop
// Note: for...in loop iterates over the indices of the array, so we can use it to reverse iterate

let index = myBrands.length - 1; // last index of the array
for (let i in myBrands) {
    console.log(`Index: ${index}, Value: ${myBrands[ index ]}`); // prints index and value of each element in reverse order
    index--;
}

console.log("-------------------------------------------------------------------------");

// Reverse iteration using for...of loop
// Note: for...of does not provide index, so we need to calculate it manually

let count = myBrands.length - 1; // last index of the array
for (let brand of myBrands) {
    console.log(`Index: ${count}, Value: ${myBrands[ count ]}`); // prints index and value of each element in reverse order
    count--;

}