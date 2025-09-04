import { Browser, chromium, Locator, Page, expect } from "@playwright/test";

(async () => {
    let browser: Browser = await chromium.launch({ headless: false });

    let page: Page = await browser.newPage();

    try {
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

        let title: string = await page.title();
        console.log(`Page title is: ${title}`);

        let url: string = page.url();
        console.log('Page url is:', url);

        let email: Locator = page.locator('#input-email');
        await email.fill('admin@admin.com');
        let password = await page.locator('#input-password').fill('admin@123');
        let loginBtn = await page.locator('xpath=//input[@value="Login"]').click();

        let warningMsg: Locator = page.locator('xpath=//div[@class="alert alert-danger alert-dismissible"]')

        await expect(warningMsg).toBeVisible();
        await expect(warningMsg).toHaveText(' Warning: No match for E-Mail Address and/or Password.');

    } catch (error) {
        console.log('E:', error);
    } finally {
        await page.close();
    }

})();