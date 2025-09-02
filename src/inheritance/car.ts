export class Car {
    // public name: string;
    // public color: string;
    // public price: number;

    // constructor(name: string, color: string, price: number) {

    //     this.name = name;
    //     this.color = color;
    //     this.price = price;
    // }

    start(): void {
        console.log('car start');
    }

    stop(): void {
        console.log('car -- stop');
    }
}

/*  
call the parent class constructor using 'super' keyword. If we are calling super constructor inside of a child constructor then it is important that it will be written as a first line inside of child constructor.

if there is no constructor is defined inside of parent class in that case TypeScript will add one hidden default constructor, which we need to call inside of child class constructor using 'super' keyword. */

export class BMW extends Car {

    // public name: string;
    // public color: string;
    // public price: number;

    // constructor(name: string, color: string, price: number) {

    //     super(name, color, price);
    //     this.name = name;
    //     this.color = color;
    //     this.price = price;
    // }

    override start(): void {
        console.log('BMW start');
    }

    autoParking(): void {
        console.log('BMW -- auto parking');
    }
}
