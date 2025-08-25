class Calculator {

    // overloaded method signatures/prototypes
    add(a: number, b: number): number;
    add(a: string, b: string): string;

    // method implementation
    add(a: any, b: any): any {
        return a + b;
    }
}

let calc = new Calculator();
let res1 = calc.add(12, 13);

// usecases: 

console.log("-------------------------------------------------------------------------");

class Ecom {
    search(name: string, color: string): string[];
    search(name: string, price: number): string[];
    search(name: string, price: number, seller: string): string[];
    search(name: string, price: number, seller: string, zip: number): string[];

    // '?' optional parameter

    search(name: any, arg2?: any, arg3?: any, arg4?: any): string[] {
        console.log(`searching for ${name}`);
        if (arg2 && typeof (arg2) === 'string') {
            console.log(`filter by color: ${arg2}`);
        } else if (arg2 && typeof (arg2) === 'number') {
            console.log(`filter by price: ${arg2}`);
        }

        if (arg3) {
            console.log(`filter by seller: ${arg3}`);
        }

        if (arg4) {
            console.log(`filter by zip: ${arg4}`);
        }

        return ['item1', 'item2', 'item3']
    }
}

let ecom = new Ecom();
ecom.search('iphone', 'black');