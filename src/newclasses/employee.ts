// If we want that my class can not inherited in TypeScript we need to create private constructor inside of that class.

export class Utilities {
    private constructor() { }

    static readPDF(): void {
        console.log('read pdf');
    }

    static writeExcel(): void {
        console.log('write in xls');
    }
}

// export class Person extends Employee {

// }

// let e1  = new Employee();

Utilities.readPDF();