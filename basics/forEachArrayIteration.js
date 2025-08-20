let product = [ 'samsung', 'apple', 'nokia', 'motorola', 'sony', 'micromax' ];

// Using forEach to iterate over the array, We can not use break or continue in forEach loop. return will not work as well.

// product.forEach((item, index) => {
//     console.log(`Product at index ${index} is: ${item}`);
// });

console.log("-------------------------------------------------------------------------");

// Using some() method to check if any product is 'sony', We can use return in some() method.

let hasSony = product.some((item, index) => {
    console.log(`Product at index ${index} is: ${item}`);
    if (item === 'sony') {
        console.log("I'm using sony's product");
        return true; // This will break the loop
    }
    return false; // Continue to next item
});
console.log(`Found 'sony' in the product list: ${hasSony}`); // Output: true
