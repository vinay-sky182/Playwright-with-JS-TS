import { Browser, chromium, Page, expect, Locator } from "@playwright/test";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    try {
        await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

        // let headingOne: string = await page.getByRole('heading', { name: 'Register Account' }).innerText();

        // 1. locator + hasText
        await page.locator('h1', { hasText: 'Register Account' }).highlight();

        // 2. getByText
        let txt: string = await page.getByText('Register Account', { exact: true }).innerText();

        // 3. using tag:text('') ---- webtable with the checkbox
        page.locator('h1:text("Register Account")').highlight();


    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();