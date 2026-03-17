import { dataTest as test, expect } from '../fixtures/dataFixtures';
import { regData } from '../fixtures/dataFixtures';

function getRandomEmail(): string {
    let randomValue = Math.random().toString(36).substring(2, 9);
    return `auto_${randomValue}@nal.com`;
}

// Data-driven test using custom fixture - separate test for each user, running in parallel
test.describe.parallel('Registration Tests', () => {
    for(let user of regData){
    test(`Register user test for: ${user.firstName} from CSV data`, async ({ page }) => {
            const email = getRandomEmail();

            // Navigate to registration page
            await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

            // Fill registration form
            await page.getByRole('textbox', { name: 'First Name' }).fill(user.firstName);
            await page.getByRole('textbox', { name: 'Last Name' }).fill(user.lastName);
            await page.getByRole('textbox', { name: 'E-Mail' }).fill(email);
            await page.getByRole('textbox', { name: 'Telephone' }).fill(user.telephone);
            await page.getByRole('textbox', { name: 'Password' }).first().fill(user.password);
            await page.getByRole('textbox', { name: 'Password Confirm' }).fill(user.password);

            // Handle newsletter subscription
            if (user.subscribeNewsletter === "Yes") {
                await page.getByRole('radio', { name: 'Yes', checked: false }).click();
            } else {
                await page.getByRole('radio', { name: 'No', checked: true }).click();
            }

            // Agree to terms and submit
            await page.locator('[name="agree"]').click();
            await page.getByRole('button', { name: 'Continue' }).click();

            // Verify success message
            await expect(page.getByText('Your Account Has Been Created!')).toBeVisible();

            // Optional: Go back or reset for next iteration
            // await page.goto('...');
       });
    }

});

// Note: This test runs sequentially for each data set. For parallel execution, use test.describe.parallel and move loop inside test. But be careful with shared state.


/* import { test } from '@playwright/test';
import { dataTest, expect } from '../fixtures/dataFixtures';


function getRandomEmail(): string {
    let randomValue = Math.random().toString(36).substring(2, 9);
    return `auto_${randomValue}@nal.com`;
}

test(`Register a user from csv data`, async ({ regData, page, baseURL }) => {


});
 */

// fixture based test with data from csv file will not execute in parallel as the test is iterating over data and executing test for each data set, so it will execute sequentially. To execute in parallel we need to use test.describe.parallel and move the loop inside the test block.