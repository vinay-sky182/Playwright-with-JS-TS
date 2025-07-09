let a = 10;
let b = 20;
if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is not greater than b");
}

if (false) {
    console.log("This will not execute"); // this is a dead code or unreachable code
} else {
    console.log("This will execute");
}

/* compare: == vs === (triple equals) 
   == checks for value equality (loose equality), while === checks for both value and type equality.
   In JavaScript, == performs type coercion, meaning it converts the operands to the same type before comparison.
   === does not perform type coercion, so both the value and type must match for the comparison to be true.

   Always use === for comparision, strict equality checks to avoid unexpected results due to type coercion.
*/


console.log(null == undefined); // true, because both are considered equal in value
console.log(null === undefined); // false, because they are of different types object and undefined
