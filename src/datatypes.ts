console.log('Data Types');

console.log("-------------------------------------------------------------------------");

let username: string = 'Vinay';

// varname: username
// type : string
// value : Vinay

console.log("-------------------------------------------------------------------------");

let marks: number = 75;
console.log(marks);

console.log(typeof (marks));

console.log("-------------------------------------------------------------------------");

// Array: Dynamic + Homgeneous : Only similar data type

let num: number[] = [10, 20, 30];

num.push(40);

console.log('num array', num);

console.log("-------------------------------------------------------------------------");

// Array with generics: <>

let names: Array<string> = ['Raja', 'Ram'];
console.log('names array', names);

console.log("-------------------------------------------------------------------------");

// Tuple: fixed length array : Heterogenous: Diffrent type of data
// fixed type

let person: [string, number] = ['Raju', 30];
console.log(person);
person.push(40);
console.log('person tuple', person);

console.log("-------------------------------------------------------------------------");

// From the TS 4.0+: we can give name for tuple elements

let empData: [id: number, name: string, salary: number, isActive: boolean] = [101, 'tom', 12.5, true]

console.log('empData tuple', empData);

console.log("-------------------------------------------------------------------------");

// Enum: collection of the constants :

enum Browser {
    chrome = 'google chrome',
    firefox = 'mozilla firefox',
    edge = 'MS edge',
    safari = 'Apple safari'
}

console.log(Browser.chrome);

enum Env {
    QA = 'qa',
    DEV = 'dev',
    UAT = 'uat',
    PROD = 'prod',
    PQA = 5
}
console.log(Env)
console.log(Env.PQA)

console.log("-------------------------------------------------------------------------");

// Any (Type)

let data: any = 45;
data = 'Playwright';
data = true;
data = 120;
data = 12.33;

console.log(data)

console.log("-------------------------------------------------------------------------");

// Unknown (Type)

let value: unknown = 'hello';
// console.log(value.length)

if (typeof (value) === 'string') {
    console.log('length of value:', value.length);
}

console.log("-------------------------------------------------------------------------");

function add(x: number, y: number): number {
    return x + y;
}

let res: number = add(44, 92);
console.log('sum of two number is:', res);

console.log("-------------------------------------------------------------------------");