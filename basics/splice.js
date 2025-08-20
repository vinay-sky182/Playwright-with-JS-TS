// splice: add/remove/update elements at specific location.

// array.splice(start, deleteCount, item1, item2, ...)

let cart = [ "apple", "banana", "orange", "grapes", "kiwi" ];

console.log("original cart array:", cart);

// Removing element at index 2
let removedElement = cart.splice(2, 1); // Removes "orange"
console.log("after removing element at index 2:", cart); // Output: [ 'apple', 'banana', 'grapes', 'kiwi' ]
console.log("removed element:", removedElement); // Output: [ 'orange' ]

// Splice() modifies the original array and returns the removed elements.

console.log("---------remove 3 elements from index 2----------------------------------------------");

let fruitCart = [ "apple", "banana", "orange", "grapes", "kiwi" ];
console.log("original fruit cart array:", fruitCart);
// remove 3 elements from index 2
let removedFruits = fruitCart.splice(2, 3); // Removes "orange", "grapes", "kiwi"
console.log("after removing 3 elements from index 2:", fruitCart); // Output: [ 'apple', 'banana' ]
console.log("removed fruits:", removedFruits); // Output: [ 'orange', 'grapes', 'kiwi' ]

console.log("-------------remove from the end: negative index------------------");

let cart2 = [ "apple", "banana", "orange", "grapes", "kiwi" ];


// remove the last 2 elements from the array
let lastTwoFruits = cart2.splice(-2, 2); // Removes "grapes", "kiwi"
console.log("after removing last 2 elements:", cart2); // Output: [ 'apple', 'banana', 'orange' ]
console.log("removed last two fruits:", lastTwoFruits); // Output: [ 'grapes', 'kiwi' ] 

console.log("-------------add single fruit element------------------");

let cart3 = [ "apple", "banana", "orange", "grapes", "kiwi" ];

// add "mango" at index 1
cart3.splice(1, 0, "mango"); // 0 means no elements are removed
console.log("after adding 'mango' at index 1:", cart3); // Output: [ 'apple', 'mango', 'banana', 'orange', 'grapes', 'kiwi' ]

console.log("-------------add multiple elements elements------------------");

let numbers = [ 4, 5, 6 ];
// add 1, 2, 3 at index 0
numbers.splice(0, 0, 1, 2, 3); // 0 means no elements are removed
console.log("after adding 1, 2, 3 at index 0:", numbers); // Output: [ 1, 2, 3, 4, 5, 6 ]


console.log("------------------replace elements-----------------------------------");

let days = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" ];

// replace "Friday" with "PartyDay"
days.splice(4, 1, "PartyDay"); // 1 means remove 1 element at index 4
console.log("after replacing 'Friday' with 'PartyDay':", days); // Output: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'PartyDay' ]

console.log("---------------replace mmultiple elements-----------------------------------");

let months = [ "January", "February", "March", "April", "May", "June" ];

// replace "February" and "March" with "Spring"
months.splice(1, 2, "Spring"); // 2 means remove 2 elements at index 1
console.log("after replacing 'February' and 'March' with 'Spring':", months); // Output: [ 'January', 'Spring', 'April', 'May', 'June' ]