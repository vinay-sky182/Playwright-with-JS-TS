import { Browser, chromium, Page, expect, Locator } from "@playwright/test";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    try {
        await page.goto("https://classic.freecrm.com/register/");

        let submitBtn: Locator = page.locator('#submitButton');
        let isVisible: boolean = await submitBtn.isVisible();
        console.log(`Is button visible: ${isVisible}`); // true

        let isEnable: boolean = await submitBtn.isEnabled(); // false
        console.log(`Is button enable: ${isEnable}`);

        await page.locator(`input[name='agreeTerms']`).click();
        let isBtnEnable: boolean = await submitBtn.isEnabled();
        console.log(`Is button enable: ${isBtnEnable}`); // true

        // playwright checks element is visible, enable, stable ---- then click on the element.
    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();