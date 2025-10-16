import { Browser, chromium, Page, expect, FrameLocator, Locator } from "@playwright/test";

(async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    try {
        await page.goto("https://selectorshub.com/iframe-scenario");

        let frameEle1: FrameLocator = page.frameLocator(`#pact1`);
        let frameEle2: FrameLocator = frameEle1.frameLocator(`#pact2`);
        let frameEle3: FrameLocator = frameEle2.frameLocator(`#pact3`);

        await frameEle1.locator('#inp_val').fill('Testing');
        await frameEle2.locator('#jex').fill('Selenium');
        await frameEle3.locator('#glaf').fill('Playwright');

    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();