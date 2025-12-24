import { Browser, chromium, Locator, Page, selectors } from "@playwright/test";

(async () => {

    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });

    let page: Page = await browser.newPage();

    try {

        await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

        // in case of image or <img> tag : name ----> alt value
        await page.getByRole('img', { name: 'naveenopencart' }).highlight();

    }
    catch (error) {
        console.log('E:', error);
    }
    finally {
        // await page.close();
    }

})();