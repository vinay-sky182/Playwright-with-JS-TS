import { test, expect } from '@playwright/test';

import fs from 'fs';

// schema/type of reg data fields || creating custom type

type RegData = {
    firstName: string,
    lastName: string,
    email: string,
    telephone: string,
    password: string,
    subscribeNewsletter: string
}

let regestrationData: RegData[] = JSON.parse(fs.readFileSync('./test-data/register.json', 'utf-8')); // reading json file and storing data in regestrationData variable 'deserializing'

for (let user of regestrationData) {
    test(`registration test for ${user.firstName}`, async ({ page }) => {
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
        await page.getByRole('textbox', { name: 'First Name' }).fill(user.firstName);
        await page.getByRole('textbox', { name: 'Last Name' }).fill(user.lastName);
        await page.getByRole('textbox', { name: 'E-Mail' }).fill(user.email);
        await page.getByRole('textbox', { name: 'Telephone' }).fill(user.telephone);
        await page.getByRole('textbox', { name: 'Password' }).first().fill(user.password);
        await page.getByRole('textbox', { name: 'Password Confirm' }).fill(user.password);

        if (user.subscribeNewsletter.toLowerCase() === 'yes') {
            await page.getByRole('radio', { name: 'Yes', checked: false }).click();
        } else {
            await page.getByRole('radio', { name: 'No', checked: true }).click();
        }

        await page.locator(`[name="agree"]`).click();
        await page.getByRole('button', { name: 'Continue' }).click();

        await expect(page.getByText('Your Account Has Been Created!', { exact: true })).toBeVisible();

    });
}