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

        // :nth-match() is a Playwright-specific pseudo-class selector that allows you to select the nth occurrence of an element matching a selector when there are multiple matches. It’s not restricted to CSS only

        const frame = page.locator(':nth-match(iframe#pact, 1)').contentFrame();
        await frame.getByPlaceholder('Do you love tea').fill('Black Tea');
    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();