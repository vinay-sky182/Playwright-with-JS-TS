import { Browser, chromium, Locator, Page, selectors } from "@playwright/test";

(async () => {

    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });

    let page: Page = await browser.newPage();

    try {

        await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

        await page.getByRole('textbox', { name: 'First Name' }).fill('Naveen');
        await page.getByRole('textbox', { name: 'Last Name' }).fill('Automation');

        await page.getByRole('checkbox').click();
        // await page.getByRole('button', { name: 'Continue' }).click();
        await page.getByRole('radio', { name: 'Yes' }).click();

    }
    catch (error) {
        console.log('E:', error);
    }
    finally {
        // await page.close();
    }

})();