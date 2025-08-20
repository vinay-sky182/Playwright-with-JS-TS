let message = "java_javascript_python_csharp_php_typescript";

let msg = message.split("_"); // Splits the string into an array using "_" as the delimiter
console.log("Print the split message:", msg); // Output: [ 'java', 'javascript', 'python', 'csharp', 'php', 'typescript' ]
// Each element of the array is a substring of the original string, split at each occurrence of "_"
console.log("-------------------------------------------------------------------------");

let test = 'aAseleniumAaAplaywrightAAaAtestingAA';
let t = test.split('aA');
// Splits the string into an array using "aA" as the delimiter
console.log("Print the split test string:", t); // Output: [ '', 'seleniumA', 'playwrightAA', 'testingAA' ]
// Each element of the array is a substring of the original string, split at each occurrence of "aA"
// The first element is an empty string because the string starts with "aA" 
// The last element contains the remaining part of the string after the last occurrence of "aA"
// If the delimiter is not found, the entire string is returned as a single element in the array
console.log("-------------------------------------------------------------------------");

