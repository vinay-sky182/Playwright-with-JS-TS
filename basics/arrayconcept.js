// Array: collection of gropup of elements in a single variable

let n = [];
console.log("Print the length of n array", n.length); // 0, because it's an empty array
console.log("Print the n array", n); // []

console.log("-------------------------------------------------------------------------");

let arr = [ 1, 2, 3, 4, 5 ]; // Array literal syntax
console.log(`Print length of 'arr' array:`, arr.length); // 5, because it has 5 elements
console.log("Print the 'arr' array:", arr); // Prints the array // [1, 2, 3, 4, 5 ]
console.log("Print the first element:", arr[ 0 ]); // 1, accessing the first element
console.log("Print the second element:", arr[ 1 ]); // 2, accessing the second element
console.log("Print the third element:", arr[ 2 ]); // 3, accessing the third element
console.log("Print the fourth element:", arr[ 3 ]); // 4, accessing the fourth element
console.log("Print the fifth element:", arr[ 4 ]); // 5, accessing the fifth element
console.log("-------------------------------------------------------------------------");
// Accessing elements using indexing
console.log("Print the sixth element:", arr[ 5 ]); // undefined, because there is no sixth element
console.log("Print the negative index element:", arr[ -1 ]); // undefined, negative indexing is not supported in JavaScript arrays
console.log("Print the last element:", arr[ arr.length - 1 ]); // 5, accessing the last element


console.log("-------------------------------------------------------------------------");

// mixed data types in array
let mixedArr = [ 'vishal', 28, 20.33, true, 'm' ];
console.log("Print the length of mixedArr array:", mixedArr.length); // 5, because it has 5 elements
console.log("Print the mixedArr array:", mixedArr); // ['vishal', 28, 20.33, true, 'm']

console.log("-------------------------------------------------------------------------");

// using array constructor
let arr2 = new Array(1, 2, 3, 4, 5); // Array constructor syntax    
let ar = new Array(5); // Creates an array with 5 empty slots
console.log("Print the length of arr2 array:", arr2.length); // 5, because it has 5 elements
console.log("Print the arr2 array:", arr2); // [1, 2, 3, 4, 5]
console.log("Print the length of ar array:", ar.length); // 5, because it has 5 empty slots
console.log("Print the ar array:", ar); // [ <5 empty items> ], it shows 5 empty slots
console.log("-------------------------------------------------------------------------");

// using array interface
let arr3 = Array.of(1, 2, 3, 4, 5); // Array.of() method creates a new array instance with the given elements
console.log("Print the length of arr3 array:", arr3.length); // 5, because it has 5 elements
console.log("Print the arr3 array:", arr3); // [1, 2, 3, 4, 5]

// JS arrays are dynamic in nature, meaning they can grow and shrink in size as needed
// We can add or remove elements from an array at any time

console.log("------------------------------Array Functions----------------------------");



let num = [ 1, 2, 3, 4, 5 ];
// length is a property of the array that returns the number of elements in the array
console.log("Print the length of num array:", num.length); // 5, because it has 5 elements
console.log("Print the num array:", num); // [1, 2, 3, 4, 5]

console.log("-------------------------------------------------------------------------");

// Adding elements to an array

num.push(6); // Adds 6 to the end of the array
console.log("Print the new length of num array after adding an element at the end:", num.length); // 6, because now it has 6 elements
console.log("Print the num array:", num); // [1, 2, 3, 4, 5, 6]
num.push(7, 8); // Adds 7 and 8 to the end of the array
console.log("Print the num array after adding 7 and 8 at the end:", num); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log("Print the new length of num array after adding 7 and 8 at the end:", num.length); // 8, because now it has 8 elements
console.log("Print the num array after adding 7 and 8 at the end:", num); // [1, 2, 3, 4, 5, 6, 7, 8]

console.log("-------------------------------------------------------------------------");

// add to the beginning of the array

num.unshift(0); // Adds 0 to the beginning of the array
console.log("Print the num array after adding 0 at the beginning:", num); // [0, 1, 2, 3, 4, 5, 6, 7, 8]
console.log("Print the new length of num array after adding 0 at the beginning:", num.length); // 9, because now it has 9 elements 
num.unshift(-1, -2); // Adds -1 and -2 to the beginning of the array
console.log("Print the num array after adding -1 and -2 at the beginning:", num); // [-1, -2, 0, 1, 2, 3, 4, 5, 6, 7, 8]
console.log("Print the new length of num array after adding -1 and -2 at the beginning:", num.length); // 11, because now it has 11 elements
console.log("Print the num array after adding -1 and -2 at the beginning:", num); // [-1, -2, 0, 1, 2, 3, 4, 5, 6, 7, 8]

console.log("-------------------------------------------------------------------------");

// Removing elements from an array

let removedElement = num.pop(); // Removes the last element (8) from the array and stores it in a variable
console.log("Print the num array after removing the last element:", num); // [-1, -2, 0, 1, 2, 3, 4, 5, 6, 7]
console.log(`Removed element: ${removedElement}`); // Removed element: 8, because we stored the removed element in a variable
console.log("Print the new length of num array after removing the last element:", num.length); // 10, because now it has 10 elements and last index is 9
console.log("Print the num array after removing the last element:", num); // [-1, -2, 0, 1, 2, 3, 4, 5, 6, 7]

console.log("-------------------------------------------------------------------------");

// remove from the beginning of the array

let remove = num.shift(); // Removes the first element (0) from the array   
console.log("Print the num array after removing the first element:", num); // [-2, 0, 1, 2, 3, 4, 5, 6, 7]
console.log(`Removed element: ${remove}`); // Removed element: -1, because we stored the removed element in a variable
console.log("Print the new length of num array after removing the first element:", num.length); // 9, because now it has 9 elements and last index is 8
console.log("Print the num array after removing the first element:", num); // [-2, 0, 1, 2, 3, 4, 5, 6, 7]   

console.log("-------------------------------------------------------------------------");

// Identifying that object is an array

let obj = { name: "vishal", age: 28 };
console.log("Given object 'obj' is an array or not:", Array.isArray(obj)); // false, because obj is not an array
console.log("Given object 'num' is an array or not:", Array.isArray(num));  // true, because num is an array || arrays are objects in JavaScript

console.log("-------------------------------------------------------------------------");

let myBrands = [ "Apple", "Samsung", "OnePlus", "Google" ];

// for loop to iterate over an array

for (let i = 0; i < myBrands.length; i++) {
    console.log("Printing each element of 'myBrands' array:", myBrands[ i ]); // prints each element of the array
}

console.log("-------------------------------------------------------------------------");

// for...of loop to iterate over an array

for (let brand of myBrands) {
    console.log("Printing each element of 'myBrands' array using for...of loop:", brand); // prints each element of the array
    // for...of loop iterates over the values of the array, not the indices
    // So, we cannot access the index directly in for...of loop
    // If we need the index, we can use the indexOf() method or a counter
    // Example: Using indexOf() method
    console.log(`Index of ${brand} is: ${myBrands.indexOf(brand)}`); // prints index of each element

}

console.log("-------------------------------------------------------------------------");

// for...in loop to iterate over an array

for (let index in myBrands) {
    console.log("Printing each element of 'myBrands' array using for...in loop:", myBrands[ index ]); // prints each element of the array
    // for...in loop iterates over the indices of the array, not the values     
    // So, we can access the index directly in for...in loop
    // If we need the value, we can use the index to access the value   
    console.log(`Value at index ${index} is: ${myBrands[ index ]}`); // prints value at each index  
    // Note: for...in loop is generally not recommended for arrays, as it can lead to unexpected results if the array is modified
    // It is better to use for...of loop or for loop for arrays
    // However, for...in loop can be useful for iterating over the properties of an object
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

console.log("-------------------------------------------------------------------------");

// Reverse method: reverse()

let reversedMyBrands = myBrands.reverse(); // Reverses the order of the elements in the array
console.log("Print the reversed 'myBrands' array:", reversedMyBrands); // [ 'Google', 'OnePlus', 'Samsung', 'Apple' ]

console.log("-------------------------------------------------------------------------");

// Join method: join()

let words = [ "Hello", "World", "from", "JavaScript" ];
let sentence = words.join(" "); // Joins the elements of the array into a string with a space as a separator
console.log("Print the joined sentence:", sentence); // Hello World from JavaScript
console.log("Print the joined sentence with comma:", words.join(", ")); // Hello, World, from, JavaScript
console.log("Print the joined sentence with hyphen:", words.join("-")); // Hello-World-from-JavaScript
console.log("Print the joined sentence with no separator:", words.join("")); // HelloWorldfromJavaScript

console.log("-------------------------------------------------------------------------");

// copying and combining arrays: using ...(spread operator)

let array1 = [ 1, 2, 3 ];
let array2 = [ 4, 5, 6 ];
let combinedArray = [ ...array1, ...array2 ]; // Combines array1 and array2 into a new array
console.log("Print the combined array of array1 and array2:", combinedArray); // [1, 2, 3, 4, 5, 6]
console.log("Print the combined array of array1 and array2 using concat method:", array1.concat(array2)); // [1, 2, 3, 4, 5, 6]
console.log("Print the combined array of array1 and array2 using push method:", array1.push(...array2)); // [1, 2, 3, 4, 5, 6], array1 is modified to include elements of array2
console.log("Print the modified array1 after using push method:", array1); // [1, 2, 3, 4, 5, 6]

console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

let copiedArray = [ ...array1 ]; // Copies array1 into a new array
console.log("Print the copied array of array1:", copiedArray); // [1, 2, 3, 4, 5, 6]
console.log("Print the original array1 after copying:", array1); // [1, 2, 3, 4, 5, 6], original array1 is not modified
// Note: Spread operator creates a shallow copy of the array, meaning it copies the elements but not the nested objects
// If the array contains objects, the objects are still referenced in the copied array

console.log("-------------------------------------------------------------------------");

console.log([] == []); // false, because arrays are reference types and two different arrays are not equal
console.log([] == 0); /* true, because empty array is coerced to 0]); "coerced" ka matlab hai ek data type ko doosre data type mein automatically convert kar dena.*/