import { Browser, chromium, Page, expect, Locator } from "@playwright/test";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    try {
        await page.goto('https://api.jquery.com/dblclick/');

        // using dblclick()
        // await page.frameLocator('iframe').locator('div').dblclick();

        // using click with clickCount
        await page.frameLocator('iframe').locator('div').click({ clickCount: 2 });
    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();