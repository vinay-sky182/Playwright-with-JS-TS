import { Browser, chromium, Page, expect, Locator } from "@playwright/test";

(async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();

    try {
        await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

        // To fectch the attribute value of a perticular tag of DOM.

        await page.locator('#input-email').fill('genral@genral.com');
        let enteredValue: string = await page.locator('#input-email').inputValue(); // it will fetch the entered value inside of textbox
        let name: string | null = await page.locator('#input-email').getAttribute('name');
        console.log(`Name attribute's value is:`, name);
        console.log(`Entered value inside of textbox is:`, enteredValue);


    }
    catch (error) {
        console.log('E:', error)
    }
    finally {
        // await page.close();
    }
})();