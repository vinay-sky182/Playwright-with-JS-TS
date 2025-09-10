// Variable: It is a container for storing values that can be used throughout the application.


// we can decleare variables using var, let, const keywords

var x: number = 20;  // keyword variableName: dataType = value;

/*
var vs let vs const:
-------------------
1) Scope
2) Declaration/Value assignment
3) Re-declaration
4) Re-assignment/Re-initialization
5) Hoisting
*/

/* 
1) Scope : accessible area of variable
-----------------------------------------

// var: function scope and global scope, we don not use var in modern JS/TS
// let: block scope, use let for variable whose value is going to change
// const: block scope, use const for variable whose value is not going to change

*/

// Ex:

function variableScope() {
    let x = 15;
    if (true) {
        var a = 10; // function scope
        let b = 20; // block scope
        const c = 30; // block scope
        console.log("Inside if block: ", a);
        console.log("Inside if block: ", b);
        console.log("Inside if block: ", c);
    }
    console.log("Outside if block: ", a); // accessible
    // console.log("Outside if block: ", b); // not accessible
    // console.log("Outside if block: ", c); // not accessible
    console.log(x);
}
variableScope();
console.log(x);

/* 2) Declaration/Value assignment:
----------------------------------------- 
*/

// var can be declared and value can be assigned later
var varVariable: number; // declaration
varVariable = 10; // value assignment/ initialization

// let can be declared and value can be assigned later
let letVariable: number; // declaration
letVariable = 20; // value assignment/ initialization

// const must be declared and value must be assigned at the same time
const constVariable: number = 30; // declaration and value assignment/ initialization

/*  3) Re-declaration:
------------------------- 
*/

// var can be re-declared
var var_Variable: number = 40; // declaration
console.log("var_Variable: ", var_Variable); // 40
var var_Variable = 50; // re-declaration
console.log("var_Variable re-declear: ", var_Variable); // 50


// let cannot be re-declared
let let_Variable: number = 50; // re-declaration error
console.log("let_Variable: ", let_Variable); // 50
// let let_Variable = 60; Cannot redeclare block-scoped variable 'let_Variable'
console.log("letVariable: ", letVariable); // 20

// const cannot be re-declared
const const_Variable: number = 60; // re-declaration error
console.log("const_Variable: ", const_Variable); // 60
// const const_Variable = 70; Cannot redeclare block-scoped variable 'const_Variable'
console.log("constVariable: ", constVariable); // 30

/* 4) Re-assignment/Re-initialization:
----------------------------------------- 
*/

// var can be re-assigned/re-initialized
var varVariable1: number = 70; // declaration and value assignment/ initialization
console.log("varVariable1: ", varVariable1); // 70
varVariable1 = 80;
console.log("varVariable1 re-assign: ", varVariable1); // 80

// let can be re-assigned/re-initialized

let letVariable1: number = 80; // declaration and value assignment/ initialization
console.log("letVariable1: ", letVariable1); // 80
letVariable1 = 90;  // re-assignment
console.log("letVariable1 re-assign: ", letVariable1); // 90    

// const cannot be re-assigned/re-initialized
const constVariable1: number = 90; // declaration and value assignment/ initialization
console.log("constVariable1: ", constVariable1); // 90

// constVariable1 = 100; // re-assignment error: Cannot assign to 'constVariable1' because it is a constant.
// console.log("constVariable1 re-assign: ", constVariable1); // 90 

/* 5) Hoisting:
----------------------------------------- 
*/

// var is hoisted
//console.log("varHoisted: ", varHoisted); // undefined
var varHoisted: number = 100; // declaration and value assignment/ initialization
console.log("varHoisted after initialization: ", varHoisted); // 100

// let is not hoisted
// console.log("letHoisted: ", letHoisted); // Cannot access 'letHoisted' before initialization
let letHoisted: number = 110; // declaration and value assignment/ initialization
console.log("letHoisted after initialization: ", letHoisted); // 110    

// Annotations: It is used to define the type of variable
// Syntax: variableName: dataType = value;

// type inference: It is used to infer the type of variable based on the value assigned to it
// Syntax: variableName = value;