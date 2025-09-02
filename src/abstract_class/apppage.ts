// abstract class : abstract + non abstract methods. can have 0 - 100% abstraction, multiple inheritance is not allowed
// interface : only have abstract methods. can have 100% abstraction, multiple inheritance is allowed

export abstract class Page {

    name: string;
    timer: number;

    constructor(name: string, timer: number) {
        this.name = name
        this.timer = timer
    }

    abstract title(): void;
    abstract url(): void;

    loadingTime(): void {
        console.log('page --- loading..10 secs..');
    }
}

export class LoginPage extends Page {


    name: string;
    timer: number;

    constructor(name: string, timer: number) {
        super(name, timer);
        this.name = name
        this.timer = timer
    }

    override title(): void {
        console.log(' login page title');
    }
    override url(): void {
        console.log(' login page url -- https://abc.com/');
    }

    // override loadingTime(): void {
    //     console.log('login page --- loading..2 secs');
    // }

    login(username: string, password: string): void {
        console.log('login with :', username, password);
    }
}

// can not create the object of 'abstract' class:
// we can create the constructor inside of abstract class.
// we don't need to create private constructor inside of abstract class because we want a child class to impliment the abstract methods.

let lp = new LoginPage('amazon', 25);
lp.title();
lp.url();
lp.loadingTime();
lp.login('admin', 'admin@123')