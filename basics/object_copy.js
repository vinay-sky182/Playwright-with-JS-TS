let user = {
    name: "John",
    city: "New York",
}

let person = { ...user };
console.log(person); // Output: { name: 'John', city: 'New York' }
console.log("-------------------------------------------------------------------------");
person.city = "Zurich";

console.log(person); // Output: { name: 'John', city: 'Zurich' }
console.log(user); // Output: { name: 'John', city: 'New York' }


let u1 = {
    name: "Alice",
    age: 28
}

let u2 = u1; // Shallow copy, here is one object reference for both u1 and u2
console.log("-------------------------------------------------------------------------");
console.log(u1); // Output: { name: 'Alice', age: 28 }  
console.log(u2); // Output: { name: 'Alice', age: 28 }
u2.age = 30;
console.log(u1); // Output: { name: 'Alice', age: 30 }
console.log(u2); // Output: { name: 'Alice', age: 30 }



let user1 = {
    name: "John",
    address: {
        city: "New York",
        zip: "10001"
    }
};

let person1 = JSON.parse(JSON.stringify(user1)); // Deep copy

person1.address.city = "Zurich";

console.log(user1.address.city);   // Output: "New York"
console.log(person1.address.city); // Output: "Zurich"