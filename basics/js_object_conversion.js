let person = {
    name: 'tom',
    age: 25,
    salary: 12,
    isActive: true,
    status: 'pending'
}

console.log(typeof(person)); // Output: object, because person is an object
console.log(person); // Output: { name: 'tom', age: 25, salary: 12, isActive: true, status: 'pending' }

console.log("-------------------------------------------------------------------------");

// JS object to JSON string conversion: Marshalling

let personJSON = JSON.stringify(person);
console.log(personJSON); // Output: {"name":"tom","age":25,"salary":12,"isActive":true,"status":"pending"}
console.log(typeof(personJSON)); // Output: string, because personJSON is a string

//pojo to JASON : Serialization and vice versa Deserialization

console.log("-------------------------------------------------------------------------");

// JSON string to JS object conversion: Unmarshalling

let bookJason = `{"title":"Hidden Hindu","author":"Akshat Gupta","published_year":2019,"book_summary":"An epic fantasy novel set in a world inspired by Indian mythology."}`;

let book = JSON.parse(bookJason);
console.log(book); // Output: { title: 'Hidden Hindu', author: 'Akshat Gupta', published_year: 2019, book_summary: 'An epic fantasy novel set in a world inspired by Indian mythology.' }
console.log(typeof(book)); // Output: object, because book is an object 