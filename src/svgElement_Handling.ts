import { Browser, chromium, Page, expect, Locator, BrowserContext } from "@playwright/test";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    try {
        await page.goto('https://www.flipkart.com/');

        // handling svg element using css selector

        await page.locator(`input[name='q']`).fill('Macbook');
        await page.locator(`button[title='Search for Products, Brands and More'] svg`).click();

    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();