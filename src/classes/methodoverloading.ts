// method overloading: multiple methods: same name

class Calc {
    // overloaded methods: signature/prototype: no method body:

    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: string, b: boolean): string;
    add(a: number, b: boolean): string;

    // single implementation only can be allowed : with the body:

    add(a: any, b: any): any {
        return a + b;
    }

}

let c1 = new Calc();
let r1 = c1.add(10, 20);
console.log('addition of two numbers:', r1);

console.log("-------------------------------------------------------------------------");

let r2 = c1.add('Playwright', 'TypeScript');
console.log('addition of to string values:', r2);

console.log("-------------------------------------------------------------------------");

let r3 = c1.add(100, true);
console.log(r3);

console.log("-------------------------------------------------------------------------");

let r4 = c1.add('vishal', true);
console.log(r4);


class Ecomm {

    search(name: string, color: string): string[];
    search(name: string, price: number): string[];
    search(name: string, price: number, seller: string): string[];
    search(name: string, price: number, seller: string, zip: number): string[]
    search(name: string, color: string, seller: string, zip: number): string[]

    // '?' it is an optional parameter

    search(name: string, color_price: any, seller?: string, zip?: number): string[] {

        console.log('searching the product.....');
        console.log(`${name} - ${color_price}, - ${seller}, - ${zip}`);
        return ['macbook pro', 'iphone', 'ipad', 'ipod'];

    }
}

let ec = new Ecomm();
ec.search('mackbook pro', 'gray');
console.log("-------------------------------------------------------------------------");
ec.search('ipod', 1000);
console.log("-------------------------------------------------------------------------");
ec.search('ipad', 5000, 'amazon');
console.log("-------------------------------------------------------------------------");
ec.search('ipad', 8000, 'amazon');
console.log("-------------------------------------------------------------------------");
ec.search('iphone', 2000, 'ebay', 122002);
console.log("-------------------------------------------------------------------------");
ec.search('nikon', 'black', 'flipkart', 122005);


console.log("-------------------------------------------------------------------------");


function login(username: string, password: string): boolean
function login(username: string, password: string, role?: string): boolean
function login(username: string, otp: number): boolean

function login(username: string, otp_password: any, role?: string): boolean {
    if (username && otp_password) {
        if (typeof (otp_password) === 'number') {
            console.log(`login with username: ${username} and otp: ${otp_password}`);
            return true;
        }
        else if (role) {
            console.log(`login with username: ${username} and password: ${otp_password} and role: ${role}`);
            return true;
        }
        else {
            console.log(`login with username: ${username} and password: ${otp_password}`);
            return true;
        }
    }
    else {
        console.log('invalid credentials..');
        return false;
    }
}

// Generally we avoid too much use of method overloading

console.log(login('adimn', 'admin@123'));
console.log("-------------------------------------------------------------------------");
console.log(login('adimn', 4263));
console.log("-------------------------------------------------------------------------");
console.log(login('adimn', 'admin@123', 'seller'));