/* import { test, expect } from '@playwright/test';
import XLSX from 'xlsx';

// excel need to be install in system with licence

const workbook = XLSX.readFile('./test-data/users.xlsx');
const sheet = workbook.Sheets['register'];

const data = XLSX.utils.sheet_to_json(sheet); // excel data into JSON object


for (let [index, user] of data.entries()) {

    // map the user object with JSON values;
    let { firstName, lastName, phone, password } = user as any; // destructuring and mapping

    test(`Registration of a new user# ${index + 1} : ${firstName}`, async ({ page }) => {


        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

        await page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
        await page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
        await page.getByRole('textbox', { name: 'E-Mail' }).fill(getRandomEmail());
        await page.getByRole('textbox', { name: 'Telephone' }).fill(phone);
        await page.getByRole('textbox', { name: 'Password' }).first().fill(password);
        await page.getByRole('textbox', { name: 'Password Confirm' }).fill(password);

        await page.getByRole('radio', { name: 'Yes', checked: false }).click();
        await page.locator('[name="agree"]').click();
        await page.getByRole('button', { name: 'Continue' }).click();

        await expect(page.getByText('Your Account Has Been Created!', { exact: true })).toBeVisible();

        // await page.pause();
    });

}

function getRandomEmail(): string {
    let randomValue = Math.random().toString(36).substring(2, 9);
    return `auto_${randomValue}@nal.com`;
} */