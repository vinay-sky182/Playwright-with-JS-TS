// map() : transformation [1,2,3]------> [1,4,9] -----> return an array of same size.
// filter() : filtering [1,2,3,4,5,6]----->[2,4,6]------> return an array of either smaller size or same size.
// reduce() : combine [1,2,3,4,5]------> 15 ------> return single value

let score = [85, 92, 67, 78, 95, 43, 88, 76, 91, 83];

// get the passing score (score>=70), add 5 numbers as bonus, then calculate the average.85,92,78,95,88,76,91,83

let avg = score.filter(ele => ele >= 70)
    .map(ele => ele + 5)
    .reduce((sum, ele) => { return sum + ele }, 0) / score.filter(ele => ele >= 70).length;

console.log(avg);

console.log("-------------------------------------------------------------------------");

let prices = [25, 60, 15, 80, 35, 120, 45, 90];

// get the lower price (price < 50), apply 10% discount, calculate total. 25-2.5 = 22.5, 15-1.5 = 13.5, 35-3.5 = 31.5, 45-4.5 = 40.5

let finalBilling = prices.filter(ele => ele < 50)
    .map(ele => ele - (ele * 10) / 100) // we can also multiply here with 0.9 
    .reduce((sum, ele) => sum + ele, 0);

console.log('final billing after perfoming multiple operations', finalBilling);

console.log("-------------------------------------------------------------------------");


let dict = ['wdio', 'git', 'typescript', 'playwright', 'cypress'];

// get long words (length > 4) -----> convert to upeer case -----> join with '-'

let res = dict.filter(ele => ele.length > 4)
    .map(ele => ele.toUpperCase())
    .join("-");

console.log('final result after performing multiple operations', res);    