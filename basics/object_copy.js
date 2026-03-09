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
// JS Object ----> JSON string ------> JS Object

let person1 = JSON.parse(JSON.stringify(user1)); // Deep copy

person1.address.city = "Zurich";

console.log(user1.address.city);   // Output: "New York"
console.log(person1.address.city); // Output: "Zurich"


let user2 = {
    name: "John Wick",
    address: {
        hotel: "Continental Osaka" // Nested Object
    }
};

let person1 = { ...user2 }; // Shallow Copy

// Spread operator (...) hamesha ek shallow copy hi banata hai. Iska matlab hai ki yeh sirf "top-level" properties ko naye object mein copy karta hai.
// Shallow copy ki asliyat tab pata chalti hai jab object ke andar doosra object ho. Agar aap nested object ko change karenge, toh dono objects badal jayenge.

/* 
1.) Naya Top-Level Container: Computer memory mein ek naya address allocate hota hai sirf bahar wale object (person) ke liye.

2.) Primitive Values: Jo simple values hain (jaise name: "John"), unki nayi copy banti hai naye address par.

3.) Nested Objects (The Catch): Jo andar ke objects ya arrays hain, unka naya address nahi banta. Shallow copy sirf unka purana "memory address" (reference) utha kar naye object mein chipka deti hai.
*/

person1.address.hotel = "Continental Casablanca";

console.log(user2.address.city); // Output: "Continental Casablanca" (Original bhi change ho gaya!)