console.log('Data Types');
console.log("-------------------------------------------------------------------------");
let username = 'Vinay';
// varname: username
// type : string
// value : Vinay
console.log("-------------------------------------------------------------------------");
let marks = 75;
console.log(marks);
console.log(typeof (marks));
console.log("-------------------------------------------------------------------------");
// Array: Dynamic + Homgeneous : Only similar data type
let num = [10, 20, 30];
num.push(40);
console.log('num array', num);
console.log("-------------------------------------------------------------------------");
// Array with generics: <>
let names = ['Raja', 'Ram'];
console.log('names array', names);
console.log("-------------------------------------------------------------------------");
// Tuple: fixed length array : Heterogenous: Diffrent type of data
// fixed type
let person = ['Raju', 30];
console.log(person);
person.push(40);
console.log('person tuple', person);
console.log("-------------------------------------------------------------------------");
// From the TS 4.0+: we can give name for tuple elements
let empData = [101, 'tom', 12.5, true];
console.log('empData tuple', empData);
console.log("-------------------------------------------------------------------------");
// Enum: collection of the constants :
var Browser;
(function (Browser) {
    Browser["chrome"] = "google chrome";
    Browser["firefox"] = "mozilla firefox";
    Browser["edge"] = "MS edge";
    Browser["safari"] = "Apple safari";
})(Browser || (Browser = {}));
console.log(Browser.chrome);
var Env;
(function (Env) {
    Env["QA"] = "qa";
    Env["DEV"] = "dev";
    Env["UAT"] = "uat";
    Env["PROD"] = "prod";
    Env[Env["PQA"] = 5] = "PQA";
})(Env || (Env = {}));
console.log(Env);
console.log(Env.PQA);
console.log("-------------------------------------------------------------------------");
// Any (Type)
let data = 45;
data = 'Playwright';
data = true;
data = 120;
data = 12.33;
console.log(data);
console.log("-------------------------------------------------------------------------");
// Unknown (Type)
let value = 'hello';
// console.log(value.length)
if (typeof (value) === 'string') {
    console.log('length of value:', value.length);
}
console.log("-------------------------------------------------------------------------");
function add(x, y) {
    return x + y;
}
let res = add(44, 92);
console.log('sum of two number is:', res);
console.log("-------------------------------------------------------------------------");
export {};
