import { Employer } from './EmployeeData';
class User extends Employer {
    constructor(name, age, salary, isActive) {
        super(name, age, salary, isActive);
        this.name = name;
        this.age = age;
        this.isActive = isActive;
    }
    getEmpData() {
        let u1 = new User('peter', 30, 15.55, true);
        console.log('u1:', u1);
        console.log('u1 name:', u1.name);
        console.log('u1 age:', u1.age);
        // console.log('u1 salary:', u1.salary); // private member not accessible
        console.log('u1 isActive:', u1.isActive); // protected member accessible within derived class
    }
}
// ✅ Create an instance and call the method
const userInstance = new User('vinay', 28, 20.5, true);
userInstance.getEmpData();
