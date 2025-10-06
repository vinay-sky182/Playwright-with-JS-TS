import { Browser, chromium, Page, expect, Locator } from "@playwright/test";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    try {
        await page.goto("https://www.flipkart.com/");

        let allLinks: string[] = await page.locator('a[href]').allInnerTexts();
        console.log('total number of links on page', allLinks.length);
    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();