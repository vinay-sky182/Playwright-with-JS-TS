// In next run change the values

import { Browser, chromium, Locator, Page, expect } from "@playwright/test";

(async () => {

    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });

    let page: Page = await browser.newPage();

    try {
        await page.goto("https://classic.freecrm.com/register/");

        // The <select> element has the ARIA role 'combobox'. selectOption() method take the value of 'value' atribute.
        await page.getByRole('combobox').selectOption('1');
        await page.getByPlaceholder('First Name').fill('Vishal');
        await page.getByPlaceholder('Last Name').fill('Sharma');
        await page.getByRole('textbox', { name: 'Email', exact: true }).fill('genral@genral.com');
        await page.getByRole('textbox', { name: 'Confirm Email' }).fill('genral@genral.com');
        await page.locator(`input[name='username']`).fill('vish108');
        await page.locator(`input[name='password']`).fill('vish@123');
        await page.locator(`input[name='passwordconfirm']`).fill('vish@123');
        await page.locator(`input[name='agreeTerms']`).click();
        await page.getByRole('button', { name: 'SUBMIT' }).click();

        // page.locator('div').filter({ hasText: 'Your company information' }).highlight(); // it is working but giving two elements
        let nextPageElement: Locator = page.locator(`//div[text() = 'Your company information and profile detail']`);
        await expect(nextPageElement).toBeVisible();
        await expect(nextPageElement).toHaveText('Your company information and profile detail');

        console.log('Test has been passed successfully!');

    }
    catch (error) {
        console.log('E:', error);
    }
    finally {
        // await page.close();
    }
})();