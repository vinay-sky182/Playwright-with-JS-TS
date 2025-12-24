import { Browser, chromium, Page, expect, Locator, BrowserContext, FrameLocator } from "@playwright/test";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    // Playwright uses the auto-pearcing for shadow dom so we don't need to write extra code to handle the shadow dom elements
    /* Playwright automatically handles shadow DOM elements, so there’s no need to write extra code for them. However, if the shadow DOM is inside an iframe, we must first interact with the iframe before locating the shadow DOM elements. This functionality will only work if the shadow DOM is in an open state. If it is in a closed state, we need to contact the developer to open it for automation purposes. */
    // For shadow root element only css selector will work xpath will not work

    try {
        await page.goto('https://selectorshub.com/shadow-dom-in-iframe/');

        // page ----> iframe ----> shadowDOM ----> input

        // await page.locator('#pact').contentFrame().first().getByPlaceholder('Do you love tea').fill('Black Tea');

        // :nth-match() is a Playwright-specific css pseudo-class selector that allows you to select the nth occurrence of an element matching a selector when there are multiple matches. It’s restricted to CSS only

        // Using Playwright's nth selector, To get the first element, use >> nth=0 || it will work with xpath also [page.frameLocator('xpath=//iframe >> nth=0');]

        // const frameElement = page.frameLocator('#pact >> nth=0');

        const frame = page.frameLocator(':nth-match(iframe#pact, 1)');
        await frame.getByPlaceholder('Do you love tea').fill('Black Tea');
    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();