import { Browser, chromium, Locator, Page, expect } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });

    let page: Page = await browser.newPage();

    try {
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

        let firstName: Locator = page.getByRole('textbox', { name: 'First Name' });
        await firstName.fill('Naveen');

        // name is lable name or aria-label name associated with the element. use only when lable name or aria-label are present in case of textbox, radioBtn, checkbox etc.
        let lastName: Locator = page.getByRole('textbox', { name: 'Last Name' });
        await lastName.fill('Automation');

        await page.getByRole('radio', { name: 'Yes' }).click();


    }
    catch (error) {
        console.log('E:', error);
    }
    finally {
        await page.close();
    }
})();