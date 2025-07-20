/* 
1. while loop
2. for loop
3. do while loop    
4. for in loop
5. for of loop
6. forEach loop
*/

console.log(`-----while loop----`);

let i = 1;
while (i <= 10) {
    console.log(`Numbers: ${i}`);
    i++;
}

console.log(`-----for loop----`);

for (let i = 0; i <= 10; i++) {
    console.log(`Num: ${i}`);
}

console.log(`-----for loop----`);

let j = 0;
for (; j <= 10;) {
    console.log(`Num: ${j}`);
    j++;
}

/* Use cases for while loop: if number of iterations is not fixed, such as:
1. wait for the webelement:0, 10..etc seconds
2. wait for the page to load: 0, 10...etc seconds
3. webtable pagination
4. wait for the API response: 0, 10...etc seconds
5. infinite page scroll
6. clalender handling
7. crousel handling
8. get data from DB-table
9. progress bar handling 0 to 100% time taken
10. file upload/download progress: time taken to download it.
11. wait for daynamic aler/popup to appear. 

Use case for, for loop: if number of iterations is fixed, such as: 
1. dropdown with fixed values
2. excel/csv file with fixed rows
3. array/list with fixed items
4. flight/bus/movie booking with fixed seats
5. menu items/categories with fixed options

Use case for do while loop: if we want to execute the loop at least once, such as:
1. land on the page check if the element is present or not in the begenning - at least once
if the element is not present then start the loop and if the element is present click and then break the loop
*/

console.log(`-----do-while loop----`);

let k = 1;
do {
    console.log(`Numbers: ${k}`);
    k++;
} while (k <= 10);  