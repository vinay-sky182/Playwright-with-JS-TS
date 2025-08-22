// filter() : filtering [1,2,3,4,5,6]----->[2,4,6]------> return an array of either smaller size or same size.

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenElements = num.filter(ele => ele % 2 === 0);
console.log('filtered array with even elements:', evenElements);
console.log('existed array:', num);

console.log("-------------------------------------------------------------------------");

let filteredNum = num.filter(ele => ele >= 5);
console.log('filtered array with elements which are greater than 5:', filteredNum);

console.log("-------------------------------------------------------------------------");

let marks = [85, 92, 67, 78, 95, 43, 88];
let passingMarks = marks.filter(ele => ele >= 70);
console.log('filtered array with passing marks', passingMarks);

console.log("-------------------------------------------------------------------------");