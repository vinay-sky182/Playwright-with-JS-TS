// "Data-Driven Page Object Model (DD-POM)" ya "Parameterized Test Factory" Approach


import { expect, test } from "@playwright/test";
import { LoginPage } from '../pages/LoginPage';
import fs from 'fs';
import { parse } from 'csv-parse/sync';

// custom data type जो Object की structure define करता है
// type RegData = {
//     firstName: string,
//     lastName: string,
//     telephone: string,
//     password: string,
//     subscribeNewsletter: string
// }

// 1. Data Type (Interface)
interface RegData {
    firstName: string;
    lastName: string;
    telephone: string;
    password: string;
    subscribeNewsletter: string;
}

let fileContent = fs.readFileSync('./data/register.csv', 'utf-8');
const registerationData: RegData[] = parse(fileContent, { columns: true, skip_empty_lines: true });

// 4. Parallel Suite
test.describe.parallel('User Registration Suite', () => {

    for (const user of registerationData) {

        test(`Verify user is able to register: ${user.firstName}`, async ({ page, baseURL }) => {

            const loginPage = new LoginPage(page);

            // Navigate to Login then Register (Flow as per your POM)
            await loginPage.goToLoginPage(baseURL || '');
            const registerPage = await loginPage.navigateToRegisterPage();

            // Action
            const email = getRandomEmail();
            const isUserRegistered = await registerPage.registerUser(user, email);

            // const isUserRegistered = await registerPage.registerUser(
            //     user.firstName,
            //     user.lastName,
            //     email,
            //     user.telephone,
            //     user.password,
            //     user.subscribeNewsletter
            // );

            // Assertion
            expect(isUserRegistered).toBeTruthy();
        });
    }
});

// for (let user of registerationData) {
//     test(`verify user is able to register ${user.firstName}`, async ({ page, baseURL }) => {

//         let loginPage = new LoginPage(page);
//         await loginPage.goToLoginPage(baseURL);
//         let registerPage: RegisterPage = await loginPage.navigateToRegisterPage();
//         let isUserRegistered: boolean = await registerPage.registerUser(user.firstName, user.lastName, getRandomEmail(), user.telephone, user.password, user.subscribeNewsletter);

//         expect(isUserRegistered).toBeTruthy();
//     });
// }

function getRandomEmail(): string {
    let randomValue = Math.random().toString(36).substring(2, 9);
    return `auto_${randomValue}@nal.com`;
}

// Math.random().toString(36) :- decimal number ko Base 36 (0-9 aur a-z) ke hisaab se calculate karta hai
// Aur uska final result aapko String format mein hi deta hai.
