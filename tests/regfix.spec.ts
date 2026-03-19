import { dataTest as test, expect, regData } from '../fixtures/dataFixtures';

function getRandomEmail(): string {
    let randomValue = Math.random().toString(36).substring(2, 9);
    return `auto_${randomValue}@nal.com`;
}

// Data-driven test using custom fixture - separate test for each user, running in parallel
/* test.describe.parallel('Registration Tests', () => {

    for (const [index, user] of regData.entries()) {

        test(`Register user test for: ${user.firstName}, Row ${index + 1} from CSV data`, async ({ page, baseURL, registerationData }) => {
            const email = getRandomEmail();
            const user = registerationData;

            // Navigate to registration page
            await page.goto(baseURL + '?route=account/register');

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
}); */

test.describe.parallel('Registration Tests', () => {

    for (const [index, rowData] of regData.entries()) {
        
        test.describe(() => {
            // Har loop iteration ke liye fixture ka index set karein
            test.use({ userIndex: index }); 

            test(`Register user test for: ${rowData.firstName}, Row ${index + 1}`, async ({ page, baseURL, registerationData }) => {
                const email = getRandomEmail();
                
                // Ab 'registerationData' hamesha wahi user dega jo 'index' mein hai
                const user = registerationData;

                await page.goto(baseURL + '?route=account/register');

                // Fill registration form
                await page.getByRole('textbox', { name: 'First Name' }).fill(user.firstName);
                await page.getByRole('textbox', { name: 'Last Name' }).fill(user.lastName);
                await page.getByRole('textbox', { name: 'E-Mail' }).fill(email);
                await page.getByRole('textbox', { name: 'Telephone' }).fill(user.telephone);
                await page.getByRole('textbox', { name: 'Password' }).first().fill(user.password);
                await page.getByRole('textbox', { name: 'Password Confirm' }).fill(user.password);

                // Subscription Logic
                const subscribeValue = user.subscribeNewsletter === "Yes";
                await page.getByRole('radio', { name: subscribeValue ? 'Yes' : 'No' }).click();

                await page.locator('[name="agree"]').click();
                await page.getByRole('button', { name: 'Continue' }).click();

                await expect(page.getByText('Your Account Has Been Created!')).toBeVisible();
            });
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