// Custom data tyopes

type userId = string | number;

let myId: userId = 123; // valid
let custId: userId = "123"; // valid

console.log(myId);

console.log("-------------------------------------------------------------------------");

type status = "active" | "inactive" | "pending";

let orderStatus: status = "pending"; // valid

type httpStatus = 400 | 200;

type buttonSize = "small" | "medium" | "large";
let btnSize: buttonSize = "medium"; // valid

// console.log("-------------------------------------------------------------------------");

type User = {
    id: string | number,
    name: string,
    salary: number,
    isActive: boolean,
    createdAt: Date
}

let newUser: User = {
    id: 1,
    name: "Harry",
    salary: 12.33,
    isActive: true,
    createdAt: new Date()
    // we can not add any other property here to add other property we need to update the User type
}

console.log(newUser);