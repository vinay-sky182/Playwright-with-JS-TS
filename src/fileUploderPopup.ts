import { Browser, chromium, Page, expect, Locator, BrowserContext } from "@playwright/test";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    try {
        await page.goto('https://practise.expandtesting.com/upload');

        // type ='file' attribute should be there for that button

        await page.locator('#fileInput').setInputFiles('file-path'); // attaching the file here

    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();