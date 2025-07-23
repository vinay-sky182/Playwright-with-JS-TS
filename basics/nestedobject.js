let user = {
    name: "John",
    age: 30,
    address: {
        city: "Gurgaon",
        zip: "122002",
        area: {
            areaName: "Sector 44",
        }
    }
};

// Iterate top-level properties using for...in loop
for (let key in user) {
    if (typeof user[ key ] === "object" && user[ key ] !== null) {
        // If property is an object, iterate its properties
        for (let subKey in user[ key ]) {
            if (typeof user[ key ][ subKey ] === "object" && user[ key ][ subKey ] !== null) {
                // If nested object, iterate its properties
                for (let innerKey in user[ key ][ subKey ]) {
                    console.log(`${innerKey}: ${user[ key ][ subKey ][ innerKey ]}`);
                }
            } else {
                console.log(`${subKey}: ${user[ key ][ subKey ]}`);
            }
        }
    } else {
        console.log(`${key}: ${user[ key ]}`);
    }
}