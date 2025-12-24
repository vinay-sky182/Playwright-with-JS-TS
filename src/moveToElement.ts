import { Browser, chromium, Page, expect, Locator } from "@playwright/test";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    try {
        await page.goto('https://www.spicejet.com/');

        await page.getByText('Add-ons', { exact: true }).hover();
        await page.getByTestId('test-id-Taxi').click();
    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();