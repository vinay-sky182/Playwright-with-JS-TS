import { Browser, chromium, Page, expect, Locator, BrowserContext } from "@playwright/test";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    // Playwright uses the auto-pearcing for shadow dom so we don't need to write extra code to handle the shadow dom elements
    /* Playwright automatically handles shadow DOM elements, so there’s no need to write extra code for them. However, if the shadow DOM is inside an iframe, we must first interact with the iframe before locating the shadow DOM elements. This functionality will only work if the shadow DOM is in an open state. If it is in a closed state, we need to contact the developer to open it for automation purposes. */
    // For shadow root element only css selector will work xpath will not work

    try {
        await page.goto('https://selectorshub.com/iframe-in-shadow-dom/');

        // page ----> shadowDOM1 ----> shadowDOM2 ----> input

        await page.locator('#pizza').fill('FarmHouse');
    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();