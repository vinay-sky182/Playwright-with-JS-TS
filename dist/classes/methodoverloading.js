class Calculator {
    // method implementation
    add(a, b) {
        return a + b;
    }
}
let calc = new Calculator();
let res1 = calc.add(12, 13);
// usecases: 
console.log("-------------------------------------------------------------------------");
class Ecom {
    // '?' optional parameter
    search(name, arg2, arg3, arg4) {
        console.log(`searching for ${name}`);
        if (arg2 && typeof (arg2) === 'string') {
            console.log(`filter by color: ${arg2}`);
        }
        else if (arg2 && typeof (arg2) === 'number') {
            console.log(`filter by price: ${arg2}`);
        }
        if (arg3) {
            console.log(`filter by seller: ${arg3}`);
        }
        if (arg4) {
            console.log(`filter by zip: ${arg4}`);
        }
        return ['item1', 'item2', 'item3'];
    }
}
let ecom = new Ecom();
ecom.search('iphone', 'black');
export {};
