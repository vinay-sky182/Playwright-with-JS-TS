export class Customer {

    // Singelton Pattern: we can create only one object of the class duplicate objects are not allowed to create.

    private static cust: Customer;

    private constructor() { }

    public static getInstance(): Customer {

        if (Customer.cust == null) {
            this.cust = new Customer();
        }
        return this.cust;
    }

    public getInfo(): void {
        console.log('getting customer info...');
    }
}

// we can not create object of the 'Customer' class using new keyword outside of the class.

// let C1 = Customer.getInstance();
// let C2 = Customer.getInstance();
// console.log(C1 === C2);

Customer.getInstance().getInfo();

// We can not achive the parellel execution with singelton pattern.

// We can use singelton pattern in the multithreding enviournment for sequential execution. 