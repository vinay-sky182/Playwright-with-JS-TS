import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

//schema/type of reg data fields
type RegData = {
    firstName: string,
    lastName: string,
    telephone: string,
    password: string,
    subscribeNewsletter: string
}

// let registerationData: RegData[] = JSON.parse(fs.readFileSync('./data/register.json', 'utf-8')); // for JSON data-provider

// let fileContent = fs.readFileSync('./data/register.csv', 'utf-8');
// let registerationData: RegData[] = parse(fileContent, { columns: true, skip_empty_lines: true })


/* test(`Registration of a user with faker`, async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ firstName: 'Auto' });
    const telephone = faker.phone.number({ style: 'national' });
    const password = faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/, prefix: 'Auto' });

    await page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
    await page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
    await page.getByRole('textbox', { name: 'E-Mail' }).fill(email);


    const strictMobile = faker.helpers.fromRegExp(/[6-9][0-9]{9}/);
    const indianPhoneNumber = `+91 ${strictMobile}`;

    await page.getByRole('textbox', { name: 'Telephone' }).fill(indianPhoneNumber);
    await page.getByRole('textbox', { name: 'Password' }).first().fill(password);
    await page.getByRole('textbox', { name: 'Password Confirm' }).fill(password);

    // if (user.subscribeNewsletter === "Yes") {
    //     await page.getByRole('radio', { name: 'Yes', checked: false }).click();
    // }
    // else {
    //     await page.getByRole('radio', { name: 'No', checked: true }).click();
    // }
    await page.getByRole('radio', { name: 'Yes', checked: false }).click();
    await page.locator('[name="agree"]').click();
    await page.getByRole('button', { name: 'Continue' }).click();

    await expect(page.getByText('Your Account Has Been Created!', { exact: true })).toBeVisible();

    await page.pause();
}); */


//----------------------------------------------------------------------------------------------------



/* test(`Registration of a user with faker genric utility`, async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let user = genrateUserDetails();
    await page.getByRole('textbox', { name: 'First Name' }).fill(user.firstName);
    await page.getByRole('textbox', { name: 'Last Name' }).fill(user.lastName);
    await page.getByRole('textbox', { name: 'E-Mail' }).fill(user.email);
    await page.getByRole('textbox', { name: 'Telephone' }).fill(user.indianPhoneNumber);
    await page.getByRole('textbox', { name: 'Password' }).first().fill(user.password);
    await page.getByRole('textbox', { name: 'Password Confirm' }).fill(user.password);

    await page.getByRole('radio', { name: 'Yes', checked: false }).click();
    await page.locator('[name="agree"]').click();
    await page.getByRole('button', { name: 'Continue' }).click();

    await expect(page.getByText('Your Account Has Been Created!', { exact: true })).toBeVisible();

    await page.pause();
}) */




function getRandomEmail(): string {
    let randomValue = Math.random().toString(36).substring(2, 9);
    return `auto_${randomValue}@nal.com`;
}

function genrateUserDetails() {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email({ firstName: 'Auto' }),
        telephone: faker.phone.number({ style: 'national' }),
        password: faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/, prefix: 'Auto' }),
        indianPhoneNumber: `+91 ${faker.helpers.fromRegExp(/[6-9][0-9]{9}/)}`
    };
}

function genratePredefineddomainEmail() {
    let totalUser = 5;
    let emailDomains = ['gmail.com', 'ymail.com', 'outlook.com', 'edu.com', 'icloud.com']
}


//--------------------------------------------------------------------------

// multiple tes case run with different set of data:
// userCount = 3

let usreCount = 3;

for (let i = 1; i <= usreCount; i++) {

    test(`Registration of a new user# ${i} with faker genric utility`, async ({ page }) => {

        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
        let user = genrateUserDetails();
        await page.getByRole('textbox', { name: 'First Name' }).fill(user.firstName);
        await page.getByRole('textbox', { name: 'Last Name' }).fill(user.lastName);
        await page.getByRole('textbox', { name: 'E-Mail' }).fill(user.email);
        await page.getByRole('textbox', { name: 'Telephone' }).fill(user.indianPhoneNumber);
        await page.getByRole('textbox', { name: 'Password' }).first().fill(user.password);
        await page.getByRole('textbox', { name: 'Password Confirm' }).fill(user.password);

        await page.getByRole('radio', { name: 'Yes', checked: false }).click();
        await page.locator('[name="agree"]').click();
        await page.getByRole('button', { name: 'Continue' }).click();

        await expect(page.getByText('Your Account Has Been Created!', { exact: true })).toBeVisible();

        // await page.pause();
    });

}


//delete * from user where email like 'auto_%'