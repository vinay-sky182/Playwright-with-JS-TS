import { BMW } from "../inheritance/car.ts";
import { User } from "./user.ts";


let u1 = new User('Tom', 28, 15.55);
u1.drive();
console.log(u1.shares);

let bm = new BMW();
bm.start();
bm.stop();
bm.autoParking();